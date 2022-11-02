import { Request, Response } from "express";
import createCinemaServices from "../../services/cinema/createCinema.services";

const createCinemaController = async (req: Request, res: Response) => {
  const name = req.body;

  const cinema = await createCinemaServices(name);

  return res.status(201).json({
    message: "Cinema created",
    ...cinema,
  });
};

export default createCinemaController;
