import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Movies } from "./movies.entities";
import { Rooms } from "./rooms.entities";

@Entity("sessions")
export class Sessions {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @CreateDateColumn({ type: "date" })
  day: Date;

  @CreateDateColumn({ type: "time" })
  hour: Date;

  @ManyToOne(() => Rooms)
  room: Rooms;

  @ManyToOne(() => Movies)
  movie: Movies;
}
