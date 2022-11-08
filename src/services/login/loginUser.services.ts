import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { IUserLogin } from "../../interfaces/user";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";

const loginUserService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });
  if (!user) {
    throw new AppError("Invalid user or password", 403);
  }
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid user or password", 403);
  }
  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      isEmployee: user.isEmployee,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );
  return token;
};
export default loginUserService;
