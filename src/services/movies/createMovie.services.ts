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
  cinema,
}: IMovies): Promise<Movies> => {
  const moviesRepository = AppDataSource.getRepository(Movies);
  const cinemaRepository = AppDataSource.getRepository(Cinema);

  const movieAlreadyExists = await moviesRepository.findOneBy({
    name: name,
  });

  if (movieAlreadyExists) {
    throw new AppError("Movie already exists");
  }

  const findCinema = await cinemaRepository.findOneBy({ id: cinema.id });
  if (!findCinema) {
    throw new AppError("Cinema not found", 400);
  }

  const movie = moviesRepository.create({
    name,
    gender,
    avaliation,
    duration,
    onDisplay,
    cinema: findCinema,
  });

  await moviesRepository.save(movie);

  return movie;
};

export default createMovieService;
