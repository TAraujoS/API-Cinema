import { Router } from "express";
import listAllTicketsController from "../controllers/tickets/listAllTickets.controller";
import listTicketByIdController from "../controllers/tickets/listTicketById.controller";
import createTicketsController from "../controllers/tickets/createTickets.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsEmployeeMiddleware from "../middlewares/ensureIsEmployee.middleware";

const ticketsRoutes = Router();

ticketsRoutes.post("", ensureAuthMiddleware, createTicketsController);

ticketsRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsEmployeeMiddleware,
  listAllTicketsController
);

ticketsRoutes.get("/:id", ensureAuthMiddleware, listTicketByIdController);

export default ticketsRoutes;
