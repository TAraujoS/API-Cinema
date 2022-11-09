import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";
import { IUserRequest } from "../../interfaces/user";

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

   if(!name || !email || !password ){

    throw new AppError(" required field !", 400);
    
   }
  
  const findUser = await userRepository.findOneBy({
    email,
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }

  if(contact.length !== 11){
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

  await userRepository.save(user);

  return user;
};

export default createUserService;
