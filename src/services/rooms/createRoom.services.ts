import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { IRoom, IRoomRequest } from "../../interfaces/rooms";
import { AppError } from "../../errors/appError";
import { Sessions } from "../../entities/sessions.entities";
import { Cinema } from "../../entities/cine.entities";

const createRoomsService = async ({
  roomId,
  capacity,
  sessionsId,
  cinemaId,
}: IRoomRequest): Promise<Rooms> => {
  const roomsRepository = AppDataSource.getRepository(Rooms);
  const sessionRepository = AppDataSource.getRepository(Sessions);
  const cinemaRepository = AppDataSource.getRepository(Cinema);

  // let day: Date = new Date();
  // const date: string = `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;

  const roomsId = await roomsRepository.findOneBy({ id: roomId });

  if (roomsId) {
    throw new AppError("This room already exists", 400);
  }

  const findSession = await sessionRepository.find();

  if (!findSession) {
    throw new AppError("Session not exists", 404);
  }

  const findCinema = await cinemaRepository.findOneBy({ id: cinemaId });

  if (!findCinema) {
    throw new AppError("Cinema not exists", 404);
  }

  const newRoom = roomsRepository.create({
    capacity,
    sessions: findSession,
    cinema: findCinema,
  });

  await roomsRepository.save(newRoom);

  return newRoom;
};

export default createRoomsService;
