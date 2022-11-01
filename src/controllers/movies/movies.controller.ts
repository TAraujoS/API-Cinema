import createMovieService from "../../services/movies/createMovie.services";
import listMoviesService from "../../services/movies/listMovies.services";
import listMoviesByIdService from "../../services/movies/listMovieById.services";
import updateMovieService from "../../services/movies/updatedMovie.services";
import deleteMovieService from "../../services/movies/deleteMovie.services";
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

const updateMovieController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie: IMovies = req.body;
  const updatedMovie = await updateMovieService(movie, id);
  return res.status(200).json(updatedMovie);
};

const deleteMovieController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteMovieService(id);
  return res.status(204).json();
};

export {
  createMovieController,
  listMoviesController,
  listMoviesByIdController,
  updateMovieController,
  deleteMovieController,
};
