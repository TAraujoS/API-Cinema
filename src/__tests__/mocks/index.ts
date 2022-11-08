import { ICinema } from "../../interfaces/cine";
import { IMoviesRequest } from "../../interfaces/movies";
import { IRoomRequest, IRoomUpdate } from "../../interfaces/rooms";
import { ISessionRequest } from "../../interfaces/sessions";
import { ITicketRequest } from "../../interfaces/tickets";
import { IUserLogin, IUserRequest } from "../../interfaces/user";

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

export const mockedUserExistente: IUserRequest = {
  name: "Ana23",
  email: "ana23@mail.com",
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

export const mockedUserLoginExistente: IUserLogin = {
  email: "ana23@mail.com",
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
  number: "1234569874563320",
  dueDate: "2026-12",
  code: "123",
};

export const mockedPaymentInfoFelipe = {
  name: "Felipe",
  number: "1234569874563320",
  dueDate: "2026-12",
  code: "123",
};

export const mockedPaymentInfoAna = {
  name: "Ana",
  number: "3236457896543210",
  dueDate: "2026-12",
  code: "123",
};

export const mockedPaymentInfoExistente1 = {
  name: "Ana",
  number: "3236457896543210",
  dueDate: "2026-12",
  code: "123",
};

export const mockedPaymentPatchInfoAna = {
  name: "Ana",
  number: "3236457896543210",
  dueDate: "2026-12",
  code: "456",
};

export const mockedPaymentInfoNumberError = {
  name: "Ana",
  number: "32364578965403",
  dueDate: "2026-12",
  code: "123",
};

export const mockedPaymentInfoCodeError = {
  name: "Ana",
  number: "32364578960543",
  dueDate: "2026-12",
  code: "13",
};

export const mockedPaymentInfoDueDateError = {
  name: "Ana",
  number: "32364578960543",
  dueDate: "",
  code: "123",
};

export const mockedTicketChair1: ITicketRequest = {
  chair: 32,
  sessionId: "1",
  userId: "3016fc2b-b609-425a-a164-de33e365049e",
};

export const mockedTicketChair2: ITicketRequest = {
  chair: 12,
  sessionId: "1",
  userId: "3016fc2b-b609-425a-a164-de33e365049e",
};

export const mockedTicketChair3: ITicketRequest = {
  chair: 54,
  sessionId: "1",
  userId: "3016fc2b-b609-425a-a164-de33e365049e",
};

export const mockedTicketChairError: ITicketRequest = {
  chair: 32,
  sessionId: "1",
  userId: "3016fc2b-b609-425a-a164-de33e365049e",
};
