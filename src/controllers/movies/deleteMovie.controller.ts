import deleteMovieService from "../../services/movies/deleteMovie.services";
import { Request, Response } from "express";

const deleteMovieController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteMovieService(id);
  return res.status(204).json();
};

export { deleteMovieController };
