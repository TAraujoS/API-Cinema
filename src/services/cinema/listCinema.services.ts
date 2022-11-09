import { AppDataSource } from "../../data-source";
import { Cinema } from "../../entities/cine.entities";

const listCinemaServices = async (): Promise<Cinema[]> => {
  const scheduleRespository = AppDataSource.getRepository(Cinema);

  const cinemas = await scheduleRespository.find({});

  return cinemas;
};

export default listCinemaServices;
