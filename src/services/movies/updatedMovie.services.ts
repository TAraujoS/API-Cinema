import { AppDataSource } from "../../data-source";
import { Movies } from "../../entities/movies.entities";
import { AppError } from "../../errors/appError";
import { IMovies } from "../../interfaces/movies";

const updateMovieService = async (
  { name, gender, avaliation, duration, onDisplay }: IMovies,
  id: string
): Promise<Movies> => {
  const moviesRepository = AppDataSource.getRepository(Movies);

  const movie = await moviesRepository.findOneBy({
    id: id,
  });

  if (!movie) {
    throw new AppError("Movie was not found");
  }

  await moviesRepository.update(id, {
    name: name ? name : movie.name,
    gender: gender ? gender : movie.gender,
    avaliation: avaliation ? avaliation : movie.avaliation,
    duration: duration ? duration : movie.duration,
    onDisplay: onDisplay ? onDisplay : movie.onDisplay,
  });

  const updatedMovie = await moviesRepository.findOneBy({
    id,
  });

  return updatedMovie!;
};

export default updateMovieService;
