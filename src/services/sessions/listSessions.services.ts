import { AppDataSource } from "../../data-source";
import { Sessions } from "../../entities/sessions.entities";

const listSessionsServices = async (): Promise<Sessions[]> => {
  const scheduleRespository = AppDataSource.getRepository(Sessions);

  const schedules = await scheduleRespository.find({
    relations: { room: true, movie: true },
  });

  return schedules;
};

export default listSessionsServices;
