import { Router } from "express";
import createSessionController from "../controllers/sessions/createSessions.controller";
import listSessionController from "../controllers/sessions/listSessions.controller";
import listSessionWithMovieIdController from "../controllers/sessions/listSessionsWithMovieId.controller";
import updateSessionController from "../controllers/sessions/updateSession.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsEmployeeMiddleware from "../middlewares/ensureIsEmployee.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import deleteSessionController from "../controllers/sessions/deleteSession.controller";

const sessionsRouter = Router();

sessionsRouter.post(
  "",
  ensureAuthMiddleware,
  ensureIsEmployeeMiddleware,
  createSessionController
);

sessionsRouter.get("", ensureAuthMiddleware, listSessionController);

sessionsRouter.get(
  "/movie/:id",
  ensureAuthMiddleware,
  listSessionWithMovieIdController
);

sessionsRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsEmployeeMiddleware,
  updateSessionController
);

sessionsRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteSessionController
);

export default sessionsRouter;
