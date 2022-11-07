import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";

const listPaymentServices = async (id: string) => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });
  console.log(findUser);
  if (!findUser.paymentInfo) {
    throw new AppError("Data not found", 404);
  }

  return findUser.paymentInfo;
};

export default listPaymentServices;
