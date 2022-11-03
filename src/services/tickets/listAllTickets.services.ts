import { AppDataSource } from "../../data-source";
import { Tickets } from "../../entities/tickets.entities";

const listAllTicketsServices = async (): Promise<Tickets[]> => {
  const ticketRepository = AppDataSource.getRepository(Tickets);

  const tickets = ticketRepository.find();

  return tickets;
};

export default listAllTicketsServices;
