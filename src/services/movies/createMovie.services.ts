import { AppError } from "../../errors/appError";
import { AppDataSource } from "../../data-source";
import { IMovies } from "../../interfaces/movies/index";
import { Movies } from "../../entities/movies.entities";
import { Cinema } from "../../entities/cine.entities";

const createMovieService = async ({
  name,
  gender,
  avaliation,
  duration,
  onDisplay,
}: IMovies): Promise<Movies> => {
  const moviesRepository = AppDataSource.getRepository(Movies);
  const cinemaRepository = AppDataSource.getRepository(Cinema);

  const movieAlreadyExists = await moviesRepository.findOneBy({
    name: name,
  });

  if (movieAlreadyExists) {
    throw new AppError("Movie already exists");
  }

  const findCinema = await cinemaRepository.find();

  const movie = moviesRepository.create({
    name,
    gender,
    avaliation,
    duration,
    onDisplay,
    cinema: findCinema[0],
  });

  await moviesRepository.save(movie);

  return movie;
};

export default createMovieService;
