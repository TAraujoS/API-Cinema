import { Router } from "express";
import createMovieController from "../controllers/movies/createMovies.controller";
import deleteMovieController from "../controllers/movies/deleteMovie.controller";
import listMoviesController from "../controllers/movies/listMovies.controller";
import listMoviesByIdController from "../controllers/movies/listMoviesById.controller";
import updateMovieController from "../controllers/movies/updateMovie.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import ensureIsEmployeeMiddleware from "../middlewares/ensureIsEmployee.middleware";

const movieRoutes = Router();

movieRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createMovieController
);

movieRoutes.get("", ensureAuthMiddleware, listMoviesController);

movieRoutes.get("/:id", ensureAuthMiddleware, listMoviesByIdController);

movieRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsEmployeeMiddleware,
  updateMovieController
);

movieRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteMovieController
);

export default movieRoutes;
