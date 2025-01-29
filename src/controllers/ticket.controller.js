import Controllers from "./controller.manager.js";
import { ticketService } from '../services/ticket.service.js';
import { roleAuth } from '../middlewares/roleAuth.js';

class TicketController extends Controllers {
  constructor(){
    super(ticketService);
  }

  createTicket = [
    roleAuth('user'),
    async (req, res, next) => {
      try {
        const { amount, purchaser } = req.body;
        const ticketData = {
          amount,
          purchaser,
          code: undefined, // Será autogenerado
          purchase_datetime: undefined // Será autogenerado
        };
        const response = await this.service.createTicket(ticketData);
        res.json(response);
      } catch (error) {
        next(error);
      }
    }
  ];
}

export const ticketController = new TicketController();
