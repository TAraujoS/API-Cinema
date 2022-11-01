import { Request, Response } from "express";
import listTicketByIdService from "../../services/tickets/listTicket.services";

const listTicketByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const ticket = await listTicketByIdService(id);
  return res.json(ticket);
};

export default listTicketByIdController;
