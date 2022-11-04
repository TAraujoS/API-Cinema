import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";

const listMoviesService = async (): Promise<Movies[]> => {
  const moviesRepository = AppDataSource.getRepository(Movies);

  const listedMovies = await moviesRepository.find();

  return listedMovies;
};

export default listMoviesService;
