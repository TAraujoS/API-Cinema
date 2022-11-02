import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user/users.interface";

const updateUserService = async ({name,email,password,contact }:IUserUpdate, id : string)=>{

  const userRepository = await AppDataSource.getRepository(User)

  const findUser = await userRepository.findOneBy({
    id
  })
  if(!findUser){
    throw new AppError('User not found', 404)
  
  }
  await userRepository.update(id, {
    name: name? name : findUser.name,
    email: email? email: findUser.email,
    password: password? await hash(password, 10): findUser.password
  })
  const user = await userRepository.findOneBy({
    id
  })

  return user!
}

export default updateUserService