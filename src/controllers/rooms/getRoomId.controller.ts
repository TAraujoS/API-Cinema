import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import getRoomIdService from "../../services/rooms/getRoomId.service";

const getRoomIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const roo = await getRoomIdService(id);

    return res.send(roo);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getRoomIdController;
