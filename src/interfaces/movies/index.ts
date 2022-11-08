export interface IMovies {
  name: string;
  gender: string;
  avaliation: number;
  duration: string;
  onDisplay: boolean;
}

export interface IMoviesRequest {
  name: string;
  gender: string;
  avaliation: number;
  duration: string;
  onDisplay: boolean;
  cinema: string;
}