import { Router } from "express";
import listAllTicketsController from "../controllers/tickets/listAllTickets.controller";
import listTicketByIdController from "../controllers/tickets/listTicketById.controller";
import createTicketsController from "../controllers/tickets/createTickets.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureIsEmployeeAdmMiddleware from "../middlewares/ensureIsEmployeeAdm.middleware";
import ensureIdUserMiddleware from "../middlewares/ensureIdUser.middleware";

const ticketsRoutes = Router();

ticketsRoutes.post("", ensureAuthMiddleware, createTicketsController);
ticketsRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsEmployeeAdmMiddleware,
  listAllTicketsController
);
ticketsRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureIdUserMiddleware,
  listTicketByIdController
);

export default ticketsRoutes;
