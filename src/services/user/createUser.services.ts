import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";
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

  const findUser = await userRepository.findOneBy({
    email,
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }
  if(contact.length >=12){
    throw new AppError("must contain eleven digits! ", 400)
  }
  
  const user = userRepository.create({
    name,
    email,
    isEmployee,
    contact,
    birthDate,
    isAdm,
    password: hashedPassword,
  });
// const regex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
//   if(user.password !== regex ){
//     throw new AppError("password wrong !")
//   }
  
  
  await userRepository.save(user);
  
  return user;
};

export default createUserService;
