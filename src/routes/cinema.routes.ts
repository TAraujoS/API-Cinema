import { Router } from "express";
import createCinemaController from "../controllers/cinema/createCinema.controller";
import updateCinemaController from "../controllers/cinema/updateCinema.controller";

const cinemaRoutes = Router();

cinemaRoutes.post("", createCinemaController);
cinemaRoutes.patch("/:id", updateCinemaController);

export default cinemaRoutes;
