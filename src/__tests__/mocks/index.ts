import { ICinema } from "../../interfaces/cine";
import { IMoviesRequest } from "../../interfaces/movies";
import { IRoomRequest, IRoomUpdate } from "../../interfaces/rooms";
import { ISessionRequest } from "../../interfaces/sessions";
import { ITicketRequest } from "../../interfaces/tickets/tickets.interface";
import {
  IUserLogin,
  IUserRequest,
} from "../../interfaces/user/users.interface";

export const mockedAdmin: IUserRequest = {
  name: "Joana",
  email: "joana@mail.com",
  password: "123456",
  isAdm: true,
  birthDate: "1987/10/02",
  contact: "999888666",
  isEmployee: true,
};

export const mockedEmployee: IUserRequest = {
  name: "Felipe",
  email: "felipe@mail.com",
  password: "123456",
  isAdm: false,
  birthDate: "1992/05/07",
  contact: "913434556",
  isEmployee: true,
};

export const mockedUser: IUserRequest = {
  name: "Ana",
  email: "ana@mail.com",
  password: "123456",
  isAdm: false,
  birthDate: "1998/07/12",
  contact: "999897898",
  isEmployee: false,
};

export const mockedUserExistent: IUserRequest = {
  name: "Ana",
  email: "ana@mail.com",
  password: "123456",
  isAdm: false,
  birthDate: "1998/07/12",
  contact: "999897898",
  isEmployee: false,
};

export const mockedAdminLogin: IUserLogin = {
  email: "joana@mail.com",
  password: "123456",
};

export const mockedEmployeeLogin: IUserLogin = {
  email: "felipe@mail.com",
  password: "123456",
};

export const mockedUserLogin: IUserLogin = {
  email: "ana@mail.com",
  password: "123456",
};

export const mockedUserLoginNoExistent: IUserLogin = {
  email: "ana@maill.com",
  password: "123456",
};

export const mockedCinema: ICinema = {
  name: "Cine Express",
};

export const mockedCinemaUpdate: ICinema = {
  name: "Cine NodeExpress",
};

export const mockedCinemaExistent: ICinema = {
  name: "Cine Express",
};

export const mockedRoom1: IRoomRequest = {
  capacity: 100,
  cinemaId: "1",
};

export const mockedRoom2: IRoomRequest = {
  capacity: 100,
  cinemaId: "1",
};

export const mockedRoom3: IRoomRequest = {
  capacity: 100,
  cinemaId: "1",
};

export const mockedRoomUpdate: IRoomUpdate = {
  capacity: 50,
};

export const mockedMovie1: IMoviesRequest = {
  name: "Jason 2",
  gender: "Comédia",
  avaliation: 4.3,
  duration: "2:00",
  onDisplay: true,
  cinema: "1",
};

export const mockedMovie2: IMoviesRequest = {
  name: "A pequena Sereia",
  gender: "Drama",
  avaliation: 4.8,
  duration: "1:58",
  onDisplay: true,
  cinema: "1",
};

export const mockedMovie3: IMoviesRequest = {
  name: "Poeira em Alto Mar",
  gender: "Adult",
  avaliation: 5.0,
  duration: "2:40",
  onDisplay: true,
  cinema: "1",
};

export const mockedMovieExistent: IMoviesRequest = {
  name: "Poeira em Alto Mar",
  gender: "Adult",
  avaliation: 5.0,
  duration: "2:40",
  onDisplay: true,
  cinema: "1",
};

export const mockedSession1 = {
  day: "2022/11/20",
  hour: "15:00",
  room_id: "1",
  movie_id: "1",
};

export const mockedSession2 = {
  day: "2022/11/05",
  hour: "18:00",
  room_id: "2",
  movie_id: "2",
};

export const mockedSession3 = {
  day: "2022/11/10",
  hour: "21:00",
  room_id: "3",
  movie_id: "3",
};

export const mockedSessionExistent = {
  day: "2022/11/10",
  hour: "21:00",
  room_id: "3",
  movie_id: "3",
};

export const mockedSessionUpdate = {
  day: "2022/12/10",
  hour: "23:00",
  room_id: "1",
  movie_id: "2",
};

export const mockedPaymentInfoJoana = {
  name: "Joana",
  number: "123456987456332",
  dueDate: 2026 - 12,
  code: "123",
};

export const mockedPaymentInfoFelipe = {
  name: "Felipe",
  number: "123456987456332",
  dueDate: 2026 - 12,
  code: "123",
};

export const mockedPaymentInfoAna = {
  name: "Ana",
  number: "323645789654321",
  dueDate: 2026 - 12,
  code: "123",
};

export const mockedPaymentInfoExistente1 = {
  name: "Ana",
  number: "323645789654321",
  dueDate: 2026 - 12,
  code: "123",
};

export const mockedPaymentInfoNumberError = {
  name: "Ana",
  number: "3236457896543",
  dueDate: 2026 - 12,
  code: "123",
};

export const mockedTicketChair1 = {
  chair: 32,
  sessionId: "1",
};

export const mockedTicketChair2 = {
  chair: 12,
  sessionId: "1",
};

export const mockedTicketChair3 = {
  chair: 54,
  sessionId: "1",
};

export const mockedTicketChairError = {
  chair: 32,
  sessionId: "1",
};
