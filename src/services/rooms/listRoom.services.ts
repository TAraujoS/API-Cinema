import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";

const getRoomsService = async () => {
  const roomsRepo = AppDataSource.getRepository(Rooms);

  const rooms = await roomsRepo.find({
    relations: {
      sessions: true,
    },
  });

  return rooms;
};

export default getRoomsService;
