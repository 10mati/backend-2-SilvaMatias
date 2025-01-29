import { Router } from "express";
import { ticketController } from "../controllers/ticket.controller.js";
import { passportCall } from "../passport/passportCall.js";

const router = Router();

router.post("/", passportCall('jwt'), ticketController.createTicket);

export default router;
