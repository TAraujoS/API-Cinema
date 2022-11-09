import updateRoomService from "../../services/rooms/updateRoom.services";
import { IRoomUpdate } from "../../interfaces/rooms";
import { Request, Response } from "express";

const updateRoomController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const room: IRoomUpdate = req.body;

  const updatedRoom = await updateRoomService(room, id);

  return res.status(200).json({ message: "Updated room" });
};

export default updateRoomController;
