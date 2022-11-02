import { Request, Response } from "express";
import updateCinemaServices from "../../services/cinema/updateCinema.services";

const updateCinemaController = async (req: Request, res: Response) => {
  const name: string = req.body;

  const { id } = req.params;

  const cinema = await updateCinemaServices(name, id);

  return res.status(201).json(cinema);
};

export default updateCinemaController;
