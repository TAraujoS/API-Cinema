export interface IRoomRequest {
  roomId: string;
  capacity: string;
  sessionsId: string;
  cinemaId: string;
}

export interface IRoom {
  capacity: string;
  sessionsId: string;
  cinemaId: string;
}
