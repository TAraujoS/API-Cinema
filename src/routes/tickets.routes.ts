import { Router } from "express";
import listAllTicketsController from "../controllers/tickets/listAllTickets.controller";
import listTicketByIdController from "../controllers/tickets/listTicketById.controller";
import createTicketsController from "../controllers/tickets/createTickets.controller";

const ticketsRoutes = Router();

ticketsRoutes.post("", createTicketsController);
ticketsRoutes.get("", listAllTicketsController);
ticketsRoutes.get("/:id", listTicketByIdController);

export default ticketsRoutes;
