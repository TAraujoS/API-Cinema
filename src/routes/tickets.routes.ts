import { Router } from "express";
import listAllTicketsController from "../controllers/tickets/listAllTickets.controller";
import listTicketByIdController from "../controllers/tickets/listTicketById.controller";
import createTicketsController from "../controllers/tickets/createTickets.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsEmployeeAdmMiddleware from "../middlewares/ensureIsEmployeeAdm.middleware";

const ticketsRoutes = Router();

ticketsRoutes.post("", ensureAuthMiddleware, createTicketsController);

ticketsRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsEmployeeAdmMiddleware,
  listAllTicketsController
);

ticketsRoutes.get("/:id", ensureAuthMiddleware, listTicketByIdController);

export default ticketsRoutes;
