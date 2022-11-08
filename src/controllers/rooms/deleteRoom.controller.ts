import deleteRoomService from "../../services/rooms/deleteRoom.services";
import { Request, Response } from "express";

const deleteRoomController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteRoomService(id);

  return res.status(204).json("");
};

export default deleteRoomController;
