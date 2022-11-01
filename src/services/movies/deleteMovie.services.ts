import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { AppError } from "../../errors/appError";

const deleteMovieService = async (id: string): Promise<void> => {
  const moviesRepository = AppDataSource.getRepository(Movies);

  const listedMovies = await moviesRepository.findOneBy({
    id: id,
  });

  if (!listedMovies) {
    throw new AppError("Movie was not found");
  }
};

export default deleteMovieService;
