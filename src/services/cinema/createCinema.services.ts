import { AppDataSource } from "../../data-source";
import { Cinema } from "../../entities/cine.entities";

import { AppError } from "../../errors/appError";

const createCinemaServices = async (name: string): Promise<Cinema> => {
  const cinemaRepository = AppDataSource.getRepository(Cinema);

  const cinema = await cinemaRepository.findOneBy({ name });

  if (cinema) {
    throw new AppError("This cinema already exists");
  }

  const newCinema = cinemaRepository.create({
    name,
  });

  await cinemaRepository.save(newCinema);

  return newCinema;
};

export default createCinemaServices;
