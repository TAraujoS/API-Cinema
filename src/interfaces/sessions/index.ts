export interface ISessionRequest {
  day: Date;
  hour: Date;
  roomId: string;
  movieId: string;
}

export interface ISessionUpdate {
  day?: string;
  hour?: string;
  roomId?: string;
  movieId?: string;
}
