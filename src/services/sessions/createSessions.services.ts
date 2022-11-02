import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { Rooms } from "../../entities/rooms.entities";
import { Sessions } from "../../entities/sessions.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";
import { ISessionRequest } from "../../interfaces/sessions";
import { normalizeDateService } from "./normalizaSchedule.services";

export const createSessionService = async ({
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

  // if (!room) {
  //   throw new AppError("This room or room dont exist", 404);
  // }

  // if (!movie) {
  //   throw new AppError("This movie or movie dont exist", 404);
  // }

  const sessionExist = await sessionRepository.findOneBy({
    day: data.fullDate,
  });

  if (sessionExist) {
    throw new AppError("This user or movie dont exist", 404);
  }

  console.log(sessionExist);

  // const normalizeSession = new Sessions();
  // normalizeSession.day = data.fullDate;
  // normalizeSession.hour = data.fullDate;
  // normalizeSession.movie = newMovie;
  // normalizeSession.room = newRoom;

  // console.log(normalizeSession);

  // const newSession = sessionRepository.create(normalizeSession);

  const newSession = sessionRepository.create({
    day: data.fullDate,
    hour: hour,
    movie: newMovie,
    room: newRoom,
  });

  await sessionRepository.save(newSession);

  return newSession;
};
