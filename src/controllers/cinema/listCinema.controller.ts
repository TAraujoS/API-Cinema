import { Request, Response } from "express";
import listCinemaServices from "../../services/cinema/listCinema.services";

const listCinemaController = async (req: Request, res: Response) => {
  const cinema = await listCinemaServices();

  return res.status(200).json({ cinemas: cinema });
};

export default listCinemaController;
