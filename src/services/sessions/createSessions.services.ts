import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { Rooms } from "../../entities/rooms.entities";
import { Sessions } from "../../entities/sessions.entities";
import { AppError } from "../../errors/appError";
import { ISessionRequest } from "../../interfaces/sessions";
import { normalizeDateService } from "./normalizaSchedule.services";

const createSessionService = async ({
  day,
  hour,
  room_id,
  movie_id,
}: ISessionRequest) => {
  const sessionRepository = AppDataSource.getRepository(Sessions);

  const roomsRepositories = AppDataSource.getRepository(Rooms);

  const moviesRepositories = AppDataSource.getRepository(Movies);

  const newRoom = await roomsRepositories.findOneBy({ id: room_id });

  const newMovie = await moviesRepositories.findOneBy({ id: movie_id });

  const data = await normalizeDateService(day, hour);

  // if (!newRoom) {
  //   throw new AppError("This room dont exist", 404);
  // }

  // if (!newMovie) {
  //   throw new AppError("This movie dont exist", 404);
  // }

  const sessionExist = await sessionRepository.findOneBy({
    day: data.fullDate,
  });

  if (sessionExist) {
    throw new AppError(
      "There is already a section scheduled with this date and time in this room",
      404
    );
  }

  const newSession = sessionRepository.create({
    day: data.fullDate,
    hour: hour,
    movie: newMovie,
    room: newRoom,
  });

  await sessionRepository.save(newSession);

  return newSession;
};

export default createSessionService;
