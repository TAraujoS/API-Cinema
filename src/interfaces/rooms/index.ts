export interface IRoomRequest {
  capacity: number;
  cinemaId: string;
}

export interface IRoom {
  roomId: string;
  capacity: number;
  sessionsId: string;
  cinemaId: string;
}

export interface IRoomUpdate {
  capacity: number;
}
