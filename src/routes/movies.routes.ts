import { Router } from "express";

import { deleteMovieController } from "../controllers/movies/deleteMovie.controller";
import { createMovieController } from "../controllers/movies/createMovies.controller";
import { listMoviesController } from "../controllers/movies/listMovies.controller";
import { listMoviesByIdController } from "../controllers/movies/listMoviesById.controller";
import { updateMovieController } from "../controllers/movies/updateMovie.controller";

const movieRoutes = Router();

movieRoutes.post("", createMovieController);
movieRoutes.get("", listMoviesController);
movieRoutes.get("/:id", listMoviesByIdController);
movieRoutes.patch("/:id", updateMovieController);
movieRoutes.delete("/:id", deleteMovieController);

export default movieRoutes;
