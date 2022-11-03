export interface ISessionRequest {
  day: string;
  hour: string;
  room_id: string;
  movie_id: string;
}

export interface ISessionUpdate {
  day?: string;
  hour?: string;
  room_id?: string;
  movie_id?: string;
}
