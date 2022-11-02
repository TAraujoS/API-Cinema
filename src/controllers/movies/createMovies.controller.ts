import createMovieService from "../../services/movies/createMovie.services";
import { IMovies } from "../../interfaces/movies";
import { Request, Response } from "express";

const createMovieController = async (req: Request, res: Response) => {
  const movie: IMovies = req.body;

  const createdMovie = await createMovieService(movie);

  return res.status(201).json(createdMovie);
};

export { createMovieController };
