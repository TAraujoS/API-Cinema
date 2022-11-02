import { Router } from "express";
import createRoomController from "../controllers/rooms/createRoom.controller";
import getRoomsController from "../controllers/rooms/getRoom.controller";
import getRoomIdController from "../controllers/rooms/getRoomId.controller";

const routes = Router();

export const roomsRoutes = () => {
  routes.post("/", createRoomController);
  routes.get("/", getRoomsController, getRoomIdController);
  return routes;
};
