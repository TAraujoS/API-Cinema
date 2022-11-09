import { Request, Response } from "express";
import listSessionsWithMovieIdServices from "../../services/sessions/listSessionsWithMovieId.services";

const listSessionWithMovieIdController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  const sessions = await listSessionsWithMovieIdServices(id);

  return res.status(200).json({ movie: sessions });
};

export default listSessionWithMovieIdController;
