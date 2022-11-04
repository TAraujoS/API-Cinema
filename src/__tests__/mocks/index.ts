import { ICinema } from "../../interfaces/cine";
import { IMovies, IMoviesRequest } from "../../interfaces/movies";
import { IRoom, IRoomRequest } from "../../interfaces/rooms";
import { ISessionRequest } from "../../interfaces/sessions";
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

export const mockedCinema: ICinema = {
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

export const mockedSession1: ISessionRequest = {
  day: "2022/11/20",
  hour: "15:00",
  room_id: "1",
  movie_id: "1",
};

export const mockedSession2: ISessionRequest = {
  day: "2022/11/05",
  hour: "18:00",
  room_id: "2",
  movie_id: "2",
};

export const mockedSession3: ISessionRequest = {
  day: "2022/11/10",
  hour: "21:00",
  room_id: "3",
  movie_id: "3",
};


