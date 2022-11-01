import { Router } from "express";

import {
  createMovieController,
  listMoviesController,
  listMoviesByIdController,
  updateMovieController,
  deleteMovieController,
} from "../controllers/movies/movies.controller";

const movieRoutes = Router();

movieRoutes.post("", createMovieController);
movieRoutes.get("", listMoviesController);
movieRoutes.get("", listMoviesByIdController);
movieRoutes.patch("/:id", updateMovieController);
movieRoutes.delete("/:id", deleteMovieController);

export default movieRoutes;
