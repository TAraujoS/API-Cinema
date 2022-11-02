import { Request, Response } from "express";
import listMoviesByIdService from "../../services/movies/listMovieById.services";

const listMoviesByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movies = await listMoviesByIdService(id);
  return res.status(200).json(movies);
};

export { listMoviesByIdController };
