import { AppError } from "../../errors/appError";
import { AppDataSource } from "../../data-source";
import { IMovies } from "../../interfaces/movies/index";
import { Movies } from "../../entities/movies.entities";

const createMovieService = async ({
  name,
  gender,
  avaliation,
  duration,
  onDisplay,
}: IMovies): Promise<Movies> => {
  const moviesRepository = AppDataSource.getRepository(Movies);
  const movieAlreadyExists = await moviesRepository.findOneBy({
    name: name,
  });

  if (movieAlreadyExists) {
    throw new AppError("Movie Already exists");
  }

  const movie = moviesRepository.create({
    name,
    gender,
    avaliation,
    duration,
    onDisplay,
  });

  await moviesRepository.save(movie);

  return movie;
};

export default createMovieService;
