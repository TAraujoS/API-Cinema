import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { AppError } from "../../errors/appError";

const deleteRoomService = async (id: string): Promise<void> => {
  const roomsRepository = AppDataSource.getRepository(Rooms);

  const room = await roomsRepository.findOneBy({
    id: id,
  });

  if (!room) {
    throw new AppError("Room was not found");
  }

  await roomsRepository.delete(id);
};

export default deleteRoomService;
