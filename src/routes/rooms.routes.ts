import { Router } from "express";
import createRoomController from "../controllers/rooms/createRoom.controller";
import getRoomsController from "../controllers/rooms/listRoom.controller";
import getRoomIdController from "../controllers/rooms/listRoomId.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const roomsRoutes = Router();

roomsRoutes.post("", createRoomController);
roomsRoutes.get("", ensureAuthMiddleware, getRoomsController);
roomsRoutes.get("", ensureAuthMiddleware, getRoomIdController);

export default roomsRoutes;
