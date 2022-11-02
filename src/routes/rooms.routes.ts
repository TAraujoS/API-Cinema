import { Router } from "express";
import createRoomController from "../controllers/rooms/createRoom.controller";
import getRoomsController from "../controllers/rooms/listRoom.controller";
import getRoomIdController from "../controllers/rooms/listRoomId.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import updateRoomController from "../controllers/rooms/updateRoom.controller";
import deleteRoomController from "../controllers/rooms/deleteRoom.controller";

const roomsRoutes = Router();

roomsRoutes.post("", createRoomController);
roomsRoutes.get("", getRoomsController);
roomsRoutes.get("/:id", getRoomIdController);
roomsRoutes.patch("/:id", updateRoomController);
roomsRoutes.delete("/:id", deleteRoomController);

export default roomsRoutes;
