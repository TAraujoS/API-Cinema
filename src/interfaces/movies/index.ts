import { Cinema } from "../../entities/cine.entities";

export interface IMovies {
  name: string;
  gender: string;
  avaliation: number;
  duration: string;
  onDisplay: boolean;
  cinema: Cinema;
}
