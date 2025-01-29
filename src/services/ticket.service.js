import Services from "./service.manager.js";
import Ticket from "../daos/mongo/models/ticket.model.js";

class TicketService extends Services {
  constructor(){
    super(Ticket);
  }

  async createTicket(data) {
    try {
      const ticket = new Ticket(data);
      await ticket.save();
      return ticket;
    } catch (error) {
      throw new Error('Error creating ticket: ' + error.message);
    }
  }
}

export const ticketService = new TicketService();
