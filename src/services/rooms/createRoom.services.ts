import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { IRoomRequest } from "../../interfaces/rooms";
import { AppError } from "../../errors/appError";
import { Sessions } from "../../entities/sessions.entities";
import { Cinema } from "../../entities/cine.entities";

const createRoomsService = async (capacity: number): Promise<Rooms> => {
  const roomsRepository = AppDataSource.getRepository(Rooms);
  const sessionRepository = AppDataSource.getRepository(Sessions);
  const cinemaRepository = AppDataSource.getRepository(Cinema);
  const findSession = await sessionRepository.find();
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
  if (!findSession) {
    throw new AppError("Session not exists", 404);
  }
  if (!findCinema) {
    throw new AppError("Cinema not exists", 404);
  }
  
  const newRoom = roomsRepository.create({
    capacity,
    sessions: findSession,
    cinema: findCinema[0],
  });
  
  await roomsRepository.save(newRoom);
  return newRoom;
};

export default createRoomsService;
