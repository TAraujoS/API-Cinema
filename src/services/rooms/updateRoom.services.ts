import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { AppError } from "../../errors/appError";
import roomsRoutes from "../../routes/rooms.routes";

const updateRoomService = async (
  { capacity, sessions, cinema },
  id: string
): Promise<Rooms> => {
  const roomsRepository = AppDataSource.getRepository(Rooms);

  const room = await roomsRepository.findOneBy({
    id: id,
  });

  if (!room) {
    throw new AppError("Room was not found");
  }

  await roomsRepository.update(id, {
    capacity: capacity ? capacity : room.capacity,
    sessions: sessions ? sessions : room.sessions,
    cinema: cinema ? cinema : room.cinema,
  });

  const updatedRoom = await roomsRepository.findOneBy({
    id,
  });

  return updatedRoom;
};

export default updateRoomService;
