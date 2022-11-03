import { AppDataSource } from "../../data-source";

export const listScheduleServices = async (): Promise<
  SchedulesUserProperties[]
> => {
  const scheduleRespository = AppDataSource.getRepository(
    SchedulesUserProperties
  );

  const schedules = await scheduleRespository.find({
    relations: { user: true, property: true },
  });

  return schedules;
};
