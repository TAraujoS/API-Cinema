import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Movies } from "./movies.entities";
import { Rooms } from "./rooms.entities";
import { Tickets } from "./tickets.entities";

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

  @ManyToOne(() => Movies, { eager: true })
  movie: Movies;

  @OneToMany(()=> Tickets ,(ticket)=> ticket.session )
  tickets: Tickets[]
}
