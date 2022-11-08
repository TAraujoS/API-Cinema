import { Request, Response } from "express";
import listMoviesService from "../../services/movies/listMovies.services";

const listMoviesController = async (req: Request, res: Response) => {
  const movies = await listMoviesService();

  return res.json(movies);
};

export default listMoviesController;
