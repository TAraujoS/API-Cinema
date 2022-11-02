import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import getRoomIdService from "../../services/rooms/listRoomId.services";

const getRoomIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const room = await getRoomIdService(id);

  return res.json(room);
};

export default getRoomIdController;
