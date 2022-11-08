import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { Rooms } from "../../entities/rooms.entities";
import { Sessions } from "../../entities/sessions.entities";
import { AppError } from "../../errors/appError";
import { ISessionRequest } from "../../interfaces/sessions";

const createSessionService = async ({
  day,
  hour,
  roomId,
  movieId,
}: ISessionRequest) => {
  if (!day || !hour || !roomId || !movieId) {
    throw new AppError("Missing required field", 400);
  }

  const sessionRepository = AppDataSource.getRepository(Sessions);
  const roomsRepositories = AppDataSource.getRepository(Rooms);
  const moviesRepositories = AppDataSource.getRepository(Movies);

  const newRoom = await roomsRepositories.findOneBy({ id: roomId });
  const newMovie = await moviesRepositories.findOneBy({ id: movieId });

  if (!newRoom) {
    throw new AppError("This room dont exist", 400);
  }

  if (!newMovie) {
    throw new AppError("This movie dont exist", 400);
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
