import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { IRoomRequest } from "../../interfaces/rooms";
import { AppError } from "../../errors/appError";
import { Cinema } from "../../entities/cine.entities";

const createRoomsService = async ({
  capacity,
}: IRoomRequest): Promise<Rooms> => {
  const roomsRepository = AppDataSource.getRepository(Rooms);
  const cinemaRepository = AppDataSource.getRepository(Cinema);

  const findCinema = await cinemaRepository.find();
  const rooms = await roomsRepository.find();

  if (capacity < 30) {
    throw new AppError("Minimum of 30 chairs");
  }

  if (capacity > 100) {
    throw new AppError("Maximum of 100 chairs");
  }

  if (rooms.length > 9) {
    throw new AppError("Only 10 rooms can be created", 404);
  }

  if (!findCinema) {
    throw new AppError("Cinema not exists", 404);
  }

  const newRoom = roomsRepository.create({
    capacity,
    cinema: findCinema[0],
  });

  await roomsRepository.save(newRoom);

  return newRoom;
};

export default createRoomsService;
