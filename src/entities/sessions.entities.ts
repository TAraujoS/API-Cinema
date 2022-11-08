import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
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

  @ManyToOne(() => Rooms, { eager: true })
  room: Rooms;

  @ManyToOne(() => Movies, { eager: true, onDelete: "CASCADE" })
  movie: Movies;
}
