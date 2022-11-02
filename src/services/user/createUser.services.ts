import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { IUserRequest } from "../../interfaces/user/users.interface";

const createUserService = async ({
  name,
  email,
  isAdm,
  contact,
  birthDate,
  isEmployee,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(password, 10);

  const findUser = userRepository.findOneBy({
    email,
  });
  // if(findUser){
  //   throw new AppError("User already exists", 409)
  // }

  const user = userRepository.create({
    name,
    email,
    isEmployee,
    contact,
    birthDate,
    isAdm,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
