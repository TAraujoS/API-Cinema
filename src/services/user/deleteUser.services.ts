import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const deletedUser = await userRepository.findOneBy({
    id,
  });

  if (!deletedUser) {
    throw new AppError("User not Found", 404);
  }

  
  await userRepository.update(id, {
    isActive: false,
  })
  
  if (deletedUser.isActive === false) {
    throw new AppError("User already deleted", 400);
  }


  
};

export default deleteUserService;
