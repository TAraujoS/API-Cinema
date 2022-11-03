export interface IRoomRequest {
  roomId: string;
  capacity: number;
  sessionsId: string;
  cinemaId: string;
}

export interface IRoom {
  capacity: number;
  sessionsId: string;
  cinemaId: string;
}

export interface IRoomUpdate {
  capacity: number;
}
