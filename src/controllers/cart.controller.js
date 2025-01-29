import Controllers from "./controller.manager.js";
import { cartService } from '../services/cart.service.js';
import { ticketService } from '../services/ticket.service.js';
import { roleAuth } from '../middlewares/roleAuth.js';
import { productService } from '../services/product.service.js';

class CartController extends Controllers {
  constructor(){
    super(cartService);
  }

  addToCart = [
    roleAuth('user'),
    async (req, res, next) => {
      try {
        const response = await this.service.addToCart(req.user.id, req.body.productId);
        res.json(response);
      } catch (error) {
        next(error);
      }
    }
  ];

  purchase = [
    roleAuth('user'),
    async (req, res, next) => {
      try {
        const { cid } = req.params;
        const cart = await this.service.getById(cid);
        if (!cart) {
          return res.status(404).json({ message: 'Carrito no encontrado' });
        }

        const productsNotProcessed = [];
        let totalAmount = 0;

        for (let item of cart.products) {
          const product = await productService.getById(item.product);
          if (product.stock >= item.quantity) {
            // Restar del stock del producto
            product.stock -= item.quantity;
            await productService.update(product._id, { stock: product.stock });
            // Sumar al total de la compra
            totalAmount += item.quantity * product.price;
          } else {
            // Agregar al array de productos no procesados
            productsNotProcessed.push(product._id);
          }
        }

        // Crear el ticket de compra
        const ticketData = {
          amount: totalAmount,
          purchaser: req.user.email
        };

        const ticket = await ticketService.createTicket(ticketData);

        // Limpiar el carrito
        await this.service.clearCart(cid);

        res.json({ message: 'Compra completada', ticket, productsNotProcessed });
      } catch (error) {
        next(error);
      }
    }
  ];
}

export const cartController = new CartController();
