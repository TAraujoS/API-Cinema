import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import getRoomsService from "../../services/rooms/getRoom.service";

const getRoomsController = async (req: Request, res: Response) => {
  const rooms = await getRoomsService();

  return res.send(rooms);
};

export default getRoomsController;
