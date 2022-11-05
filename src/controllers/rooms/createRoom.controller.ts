import { Request, Response } from "express";
import { IRoomRequest } from "../../interfaces/rooms";
import createRoomsService from "../../services/rooms/createRoom.services";

const createRoomController = async (req: Request, res: Response) => {
  const { capacity } = req.body;

  const newRoom = await createRoomsService(capacity);

  return res.status(201).json(newRoom);
};

export default createRoomController;
