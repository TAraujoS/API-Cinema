import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { Rooms } from "../../entities/rooms.entities";
import { Sessions } from "../../entities/sessions.entities";
import { AppError } from "../../errors/appError";
import { ISessionRequest } from "../../interfaces/sessions";

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

  if (!newRoom) {
    throw new AppError("This room dont exist", 404);
  }

  if (!newMovie) {
    throw new AppError("This movie dont exist", 404);
  }

  const sessionExist = await sessionRepository.findOne({
    where: {
      day,
      hour,
    },
  });

  if (sessionExist) {
    throw new AppError(
      "There is already a section scheduled with this date and time in this room",
      400
    );
  }

  const newSession = sessionRepository.create({
    day,
    hour,
    room: newRoom,
    movie: newMovie,
  });

  await sessionRepository.save(newSession);

  return newSession;
};

export default createSessionService;
