import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";

const listPaymentServices = async (id: string) => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);
<<<<<<< HEAD
  const userRepository = AppDataSource.getRepository(User);
=======

  const idPayment = paymentRepository.findOneBy({ id: id });
>>>>>>> 9d2efb783a48f6d563e4874ec4178b0d46001616

  const findUser = await userRepository.findOneBy({ id });

  if (!findUser.paymentInfo) {
    throw new AppError("Data not found", 404);
  }

  return findUser.paymentInfo;
};

export default listPaymentServices;
