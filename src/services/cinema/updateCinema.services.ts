import { AppDataSource } from "../../data-source";
import { Cinema } from "../../entities/cine.entities";
import { AppError } from "../../errors/appError";

const updateCinemaServices = async (
  name: string,
  id: string
): Promise<Cinema> => {
  if (!name) {
    throw new AppError("Missing required field", 400);
  }

  const cinemaRepository = AppDataSource.getRepository(Cinema);

  const findCinema = cinemaRepository.findOneBy({ id });

  if (!findCinema) {
    throw new AppError("Cinema not found");
  }

  await cinemaRepository.update(id, {
    name,
  });

  const updatedCinema = await cinemaRepository.findOneBy({ id });

  return updatedCinema;
};

export default updateCinemaServices;
