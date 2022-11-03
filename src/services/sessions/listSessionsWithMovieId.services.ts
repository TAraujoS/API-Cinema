import { Session } from "inspector";
import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { AppError } from "../../errors/appError";

export const listSessionsWithMovieIdServices = async (
  id: string
): Promise<Movies> => {
  const movieIdRepository = AppDataSource.getRepository(Movies);

  const movie = await movieIdRepository.findOne({
    where: { id: id },
    relations: {
      sessions: true,
    },
  });

  if (!movie) {
    throw new AppError("This movie dont exist", 404);
  }

  return movie;
};

export default listSessionsWithMovieIdServices;
