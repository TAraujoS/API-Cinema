import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { AppError } from "../../errors/appError";

const getRoomIdService = async (id: string) => {
  const roomsRepository = AppDataSource.getRepository(Rooms);

  const rooms = await roomsRepository.findOne({
    where: {
      id,
    },
    relations: {
      sessions: true,
    },
  });

  if (!rooms) {
    throw new AppError("Invalid Id or room not exists", 404);
  }

  return rooms;
};

export default getRoomIdService;
