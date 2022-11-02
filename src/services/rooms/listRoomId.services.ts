import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { AppError } from "../../errors/appError";

const getRoomIdService = async (id: string) => {
  const roomsRepository = AppDataSource.getRepository(Rooms);

  const rooms = await roomsRepository.find();

  const roomId = rooms.find((e) => e.id === id);

  if (!roomId) {
    throw new AppError("Invalid Id", 404);
  }

  return roomId.cinema;
};

export default getRoomIdService;
