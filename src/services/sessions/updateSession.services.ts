import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { Rooms } from "../../entities/rooms.entities";
import { Sessions } from "../../entities/sessions.entities";
import { AppError } from "../../errors/appError";
import { ISessionUpdate } from "../../interfaces/sessions";
import { normalizeDateService } from "./normalizaSchedule.services";

const updateSessionService = async (
  { day, hour, room_id, movie_id }: ISessionUpdate,
  id: string
): Promise<Sessions> => {
  const sessionRepository = AppDataSource.getRepository(Sessions);

  const roomsRepositories = AppDataSource.getRepository(Rooms);

  const moviesRepositories = AppDataSource.getRepository(Movies);

  const newRoom = await roomsRepositories.findOneBy({ id: room_id });

  const newMovie = await moviesRepositories.findOneBy({ id: movie_id });

  const findSession = await sessionRepository.findOneBy({
    id,
  });

  if (!findSession) {
    throw new AppError("Session dont found", 404);
  }

  const data = await normalizeDateService(day, hour);

  await sessionRepository.update(id, {
    day: data.fullDate ? data.fullDate : findSession.day,
    hour: hour ? hour : findSession.hour,
    room: newRoom ? newRoom : findSession.room,
    movie: newMovie ? newMovie : findSession.movie,
  });

  const updatedSession = await sessionRepository.findOneBy({
    id,
  });

  return updatedSession!;
};

export default updateSessionService;
