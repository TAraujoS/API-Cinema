import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { AppError } from "../../errors/appError";

const deleteMovieService = async (id: string): Promise<void> => {
  const moviesRepository = AppDataSource.getRepository(Movies);

  const movie = await moviesRepository.findOneBy({
    id: id,
  });

  if (!movie) {
    throw new AppError("Movie was not found");
  }

  await moviesRepository.delete(id);
};

export default deleteMovieService;
