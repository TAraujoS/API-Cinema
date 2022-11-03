import { Router } from "express";
import createSessionController from "../controllers/sessions/createSessions.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureIsEmployeeMiddleware from "../middlewares/ensureIsEmployee.middleware";

const sessionsRouter = Router();

sessionsRouter.post(
  "",
  ensureAuthMiddleware,
  ensureIsEmployeeMiddleware,
  createSessionController
);

sessionsRouter.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware
  // listScheduleController
);

// sessionsRouter.get(
//   "/properties/:id",
//   ensureAuthMiddleware,
//   ensureIsAdmMiddleware
//   ensureIdVerifyMiddleware,
//   listScheduleController
// );

export default sessionsRouter;
