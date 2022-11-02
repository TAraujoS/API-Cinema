import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Movies } from "./movies.entities";
import { Rooms } from "./rooms.entities";

@Entity("sessions")
export class Sessions {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @CreateDateColumn({ type: "date" })
  day: Date;

  @CreateDateColumn({ type: "time" })
  hour: Date;

  @OneToMany(() => Rooms, (room) => room.id)
  room: Rooms;

  @OneToMany(() => Movies, (movie) => movie.id)
  movie: Movies;
}
