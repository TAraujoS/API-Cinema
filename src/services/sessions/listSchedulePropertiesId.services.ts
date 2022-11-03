import AppDataSource from "../../data-source";
import { Properties } from "../../entities/propeties.entities";
import { AppError } from "../../errors/appError";

export const listSchedulePropertiesIdServices = async (id: string) => {
  const schedulesPropertyIdRespository =
    AppDataSource.getRepository(Properties);

  const property = await schedulesPropertyIdRespository.findOneBy({ id });

  if (!property) {
    throw new AppError("This ID dont exist", 404);
  }

  const propertyScheduled = await schedulesPropertyIdRespository.findOne({
    where: { id },
  });

  if (!propertyScheduled) {
    throw new AppError("Property does not exist!", 404);
  }

  if (propertyScheduled?.schedulesUserProperties.length === 0) {
    throw new AppError("Property has no schedules!", 404);
  }

  return propertyScheduled;
};
