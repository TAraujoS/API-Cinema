import { AppDataSource } from "../../data-source";
import { Rooms } from "../../entities/rooms.entities";
import { IRoom, IRoomRequest } from "../../interfaces/rooms";
import { v4 as uuid } from "uuid";
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

  let d: Date = new Date();
  const date: string = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  const roomsId = await roomsRepository.findOneBy({ id: roomId });

  if (roomsId) {
    throw new AppError("this Room already exists", 400);
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
