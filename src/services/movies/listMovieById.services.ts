import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";

const listMoviesByIdService = async (id: string): Promise<Movies> => {
  const moviesRepository = AppDataSource.getRepository(Movies);

  const listedMovies = await moviesRepository.findOne({
    where: {
      id: id,
    },
  });

  return listedMovies;
};

export default listMoviesByIdService;
