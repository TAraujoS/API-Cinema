import createMovieService from "../../services/movies/createMovie.services";
import listMoviesService from "../../services/movies/listMovies.services";
import listMoviesByIdService from "../../services/movies/listMovieById.services";
import { IMovies } from "../../interfaces/movies";
import { Request, Response } from "express";

const createMovieController = async (req: Request, res: Response) => {
  const movie: IMovies = req.body;
  const createdMovie = await createMovieService(movie);
  return res.status(201).json(createdMovie);
};

const listMoviesController = async (res: Response) => {
  const movies = await listMoviesService();
  return res.status(200).json(movies);
};

const listMoviesByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movies = await listMoviesByIdService(id);
  return res.status(200).json(movies);
};

export {
  createMovieController,
  listMoviesController,
  listMoviesByIdController,
};
