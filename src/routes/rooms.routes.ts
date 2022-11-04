import { Router } from "express";
import createRoomController from "../controllers/rooms/createRoom.controller";
import getRoomsController from "../controllers/rooms/listRoom.controller";
import getRoomIdController from "../controllers/rooms/listRoomId.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import deleteRoomController from "../controllers/rooms/deleteRoom.controller";
import ensureIsAdmMiddleware from "../middlewares/ensureIsEmployeeAdm.middleware";
import updateRoomController from "../controllers/rooms/updateRoom.controller";
import ensureIsEmployeeAdmMiddleware from "../middlewares/ensureIsEmployeeAdm.middleware";

const roomsRoutes = Router();

roomsRoutes.post("", createRoomController);
roomsRoutes.get("", ensureAuthMiddleware, getRoomsController);
roomsRoutes.get("/:id", ensureAuthMiddleware, getRoomIdController);
roomsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsEmployeeAdmMiddleware,
  updateRoomController
);
roomsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteRoomController
);

export default roomsRoutes;
