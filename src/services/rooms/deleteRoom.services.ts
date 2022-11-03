import { AppDataSource } from "../../data-source";
import { Sessions } from "../../entities/sessions.entities";
import { AppError } from "../../errors/appError";

const deleteSessionService = async (id: string): Promise<void> => {
  const sessionRepository = AppDataSource.getRepository(Sessions);

  const session = await sessionRepository.findOneBy({
    id: id,
  });

  if (!session) {
    throw new AppError("Room was not found");
  }

  await sessionRepository.delete(id);
};

export default deleteSessionService;
