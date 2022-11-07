import { AppDataSource } from "../../data-source";
import { PaymentInfo } from "../../entities/paymentInfo.entities";
import { AppError } from "../../errors/appError";
import { IPaymentRequest } from "../../interfaces/payments";
import { User } from "../../entities/user.entities";

const createPaymentServices = async ({
  name,
  number,
  dueDate,
  code,
  userId,
}: IPaymentRequest): Promise<PaymentInfo> => {
  const paymentRepository = AppDataSource.getRepository(PaymentInfo);

  if (number.length !== 16) {
    throw new AppError("Invalid card number", 401);
  }

  const newDueDate = dueDate + "-01";

  if (!newDueDate) {
    throw new AppError("Date is required", 401);
  }

  if (code.length !== 3) {
    throw new AppError("Invalid code number", 401);
  }

  const userRepository = AppDataSource.getRepository(User);
  const paymentInfo = paymentRepository.create({
    name,
    number,
    dueDate,
    code,
  });
  await paymentRepository.save(paymentInfo);
  console.log(userId);
  await userRepository.update(
    { id: userId },
    {
      paymentInfo,
    }
  );

  console.log(paymentInfo);

  return paymentInfo;
};

export default createPaymentServices;
