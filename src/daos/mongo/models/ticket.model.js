import { Schema, model } from "mongoose";


const TicketSchema = new Schema({
  code: {
    type: String,
    unique: true,
    default: 
  },
  purchase_datetime: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  },
  purchaser: {
    type: String,
    required: true
  }
});

export const TicketModel = model("tickets", TicketSchema);
