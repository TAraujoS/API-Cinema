import { Router } from "express";
import createCinemaController from "../controllers/cinema/createCinema.controller";
import listCinemaController from "../controllers/cinema/listCinema.controller";
import updateCinemaController from "../controllers/cinema/updateCinema.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureUpdateMiddleware from "../middlewares/ensureUpdate.middleware";

const cinemaRoutes = Router();

cinemaRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createCinemaController
);

cinemaRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listCinemaController
);

cinemaRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureUpdateMiddleware,
  updateCinemaController
);

export default cinemaRoutes;
