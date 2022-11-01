import { AppDataSource } from "../../data-source";
import { Sessions } from "../../entities/sessions.entities";
import { Tickets } from "../../entities/tickets.entities";
import { AppError } from "../../errors/appError";
import { ITicketRequest } from "../../interfaces/tickets/tickets.interface";

const createTicketsService = async ({
  chair,
  sessionId,
}: ITicketRequest): Promise<Tickets> => {
  const ticketRepository = AppDataSource.getRepository(Tickets);
  const sessionsRepository = AppDataSource.getRepository(Sessions);

  const findSession = await sessionsRepository.findOneBy({ id: sessionId });

  const findTicket = await ticketRepository.findOne({
    where: {
      chair,
    },
    relations: {
      session: true,
    },
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

  const ticket = ticketRepository.create({
    chair,
    session: findSession,
  });

  ticketRepository.create(ticket);

  await ticketRepository.save(ticket);

  return ticket;
};

export default createTicketsService;
