import { Router } from "express";
import { createSessionController } from "../controllers/sessions/createSessions.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsAdmMiddleware } from "../middlewares/ensureIsAdm.middleware";
import { ensureIsEmployeeMiddleware } from "../middlewares/ensureIsEmployee.middleware";

export const sessionsRouter = Router();

sessionsRouter.post("", createSessionController);

// sessionsRouter.get(
//   "",
//   ensureAuthMiddleware,
//   ensureIsAdmMiddleware
//   listScheduleController
// );

// sessionsRouter.get(
//   "/properties/:id",
//   ensureAuthMiddleware,
//   ensureIsAdmMiddleware
//   ensureIdVerifyMiddleware,
//   listScheduleController
// );
