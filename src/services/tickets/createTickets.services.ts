import { AppDataSource } from "../../data-source";
import { Sessions } from "../../entities/sessions.entities";
import { Tickets } from "../../entities/tickets.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/appError";
import { ITicketRequest } from "../../interfaces/tickets";

const createTicketsService = async ({
  chair,
  sessionId,
  userId,
}: ITicketRequest): Promise<Tickets> => {
  const ticketRepository = AppDataSource.getRepository(Tickets);
  const sessionsRepository = AppDataSource.getRepository(Sessions);
  const userRepository = AppDataSource.getRepository(User);

  const findSession = await sessionsRepository.findOneBy({ id: sessionId });
  const findTicket = await ticketRepository.findOne({
    where: {
      chair,
      session: findSession,
    },
    relations: { user: true },
  });

  if (chair > 100) {
    throw new AppError("Choose a chair between 0 to 100");
  }

  if (!findSession) {
    throw new AppError("Session not exists");
  }

  if (findTicket) {
    throw new AppError("Chair is already in use");
  }
  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  const ticket = ticketRepository.create({
    chair,
    session: findSession,
    user: findUser,
  });

  await ticketRepository.save(ticket);

  return ticket;
};

export default createTicketsService;
