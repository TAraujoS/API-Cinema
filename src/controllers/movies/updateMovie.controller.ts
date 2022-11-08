import updateMovieService from "../../services/movies/updatedMovie.services";
import { IMovies } from "../../interfaces/movies";
import { Request, Response } from "express";

const updateMovieController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const movie: IMovies = req.body;

  const updatedMovie = await updateMovieService(movie, id);

  return res.status(200).json(updatedMovie);
};

export default updateMovieController;
