import { AppDataSource } from "../../data-source";
import { Tickets } from "../../entities/tickets.entities";
import { AppError } from "../../errors/appError";

const listTicketByIdService = async (id: string): Promise<Tickets> => {
  const ticketRepository = AppDataSource.getRepository(Tickets);

  const findTicket = ticketRepository.findOneBy({ id });

  if (!findTicket) {
    throw new AppError("Ticket not found");
  }

  return findTicket;
};

export default listTicketByIdService;
