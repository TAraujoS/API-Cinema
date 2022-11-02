import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IRoomRequest } from "../../interfaces/rooms";
import createRoomsService from "../../services/rooms/createRoom.service";

const createRoomController = async (req: Request, res: Response) => {
  try {
    const { roomId, capacity, sessions_id }: IRoomRequest = req.body;

    const roo = await createRoomsService({
      roomId,
      capacity,
      sessions_id,
    });

    return res.status(201).send(roo);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createRoomController;
