import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { ITicketRequest } from "../../interfaces/tickets";
import createTicketsService from "../../services/tickets/createTickets.services";

const createTicketsController = async (req: Request, res: Response) => {
  const data: ITicketRequest = req.body;

  const ticket = await createTicketsService(data);

  return res.status(201).json(instanceToPlain(ticket));
};

export default createTicketsController;
