import { Router } from "express";
import createSessionController from "../controllers/sessions/createSessions.controller";
import deleteSessionController from "../controllers/sessions/deleteSession.controller";
import listSessionController from "../controllers/sessions/listSessions.controller";
import listSessionWithMovieIdController from "../controllers/sessions/listSessionsWithMovieId.controller";
import updateSessionController from "../controllers/sessions/updateSession.controller";
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

sessionsRouter.get("", ensureAuthMiddleware, listSessionController);

sessionsRouter.patch("/:id", ensureAuthMiddleware, updateSessionController);

sessionsRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteSessionController
);

sessionsRouter.get(
  "/movie/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listSessionWithMovieIdController
);

export default sessionsRouter;
