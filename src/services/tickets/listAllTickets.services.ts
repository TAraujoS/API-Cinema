import { AppDataSource } from "../../data-source";
import { Tickets } from "../../entities/tickets.entities";

const listAllTicketsServices = async (): Promise<Tickets[]> => {
  const ticketRepository = AppDataSource.getRepository(Tickets);

  const tickets = ticketRepository.find({
    relations: {
      session: true,
    },
  });

  return tickets;
};

export default listAllTicketsServices;
