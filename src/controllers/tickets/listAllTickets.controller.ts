import { Request, Response } from "express";
import listAllTicketsServices from "../../services/tickets/listAllTickets.services";

const listAllTicketsController = async (req: Request, res: Response) => {
  const tickets = await listAllTicketsServices();

  return res.json(tickets);
};

export default listAllTicketsController;
