import { Request, Response } from "express";
import { ITicketRequest } from "../../interfaces/tickets/tickets.interface";
import createTicketsService from "../../services/tickets/createTickets.services";

const createTicketsController = async (req: Request, res: Response) => {
  const data: ITicketRequest = req.body;

  const ticket = await createTicketsService(data);

  return res.status(200).json(ticket);
};

export default createTicketsController;
