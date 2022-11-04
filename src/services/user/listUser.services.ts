import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";

const listUsersService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    relations: {
      tickets: true,
    },
  });

  return users;
};

export default listUsersService;
