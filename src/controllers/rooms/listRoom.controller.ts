import { Request, Response } from "express";
import getRoomsService from "../../services/rooms/listRoom.services";

const getRoomsController = async (req: Request, res: Response) => {
  const rooms = await getRoomsService();

  return res.json(rooms);
};

export default getRoomsController;
