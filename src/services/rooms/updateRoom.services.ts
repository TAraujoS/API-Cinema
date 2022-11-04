import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { AppError } from "../../errors/appError";
import { IRoomUpdate } from "../../interfaces/rooms";

const updateRoomService = async (
  { capacity }: IRoomUpdate,
  id: string,
): Promise<Rooms> => {
  const roomsRepository = AppDataSource.getRepository(Rooms);

  const room = await roomsRepository.findOneBy({
    id: id,
  });

  if (!room) {
    throw new AppError("Room was not found");
  }

  if (capacity <= 0) {
    !room;
  }

  if (capacity > 100) {
    throw new AppError("room is already full");
  }

  await roomsRepository.update(id, {
    capacity: capacity ? capacity : room.capacity,
  });

  const updatedRoom = await roomsRepository.findOneBy({
    id,
  });

  return updatedRoom;
};

export default updateRoomService;
