import Services from "./service.manager.js";
import { CartModel } from "../daos/mongo/models/cart.model.js";

class CartService extends Services {
  constructor(){
    super(CartModel);
  }

  async clearCart(cartId) {
    try {
      const cart = await this.dao.findById(cartId);
      if (!cart) throw new Error("Carrito no encontrado");
      cart.products = [];
      await cart.save();
      return cart;
    } catch (error) {
      throw new Error('Error clearing cart: ' + error.message);
    }
  }

  async addToCart(userId, productId, quantity) {
    try {
      let cart = await this.dao.findOne({ user: userId });
      if (!cart) {
        cart = new CartModel({ user: userId, products: [] });
      }
      const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
      await cart.save();
      return cart;
    } catch (error) {
      throw new Error('Error adding to cart: ' + error.message);
    }
  }

  
}

export const cartService = new CartService();
