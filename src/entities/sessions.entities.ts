import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Movies } from "./movies.entities";
import { Rooms } from "./rooms.entities";

@Entity("sessions")
export class Sessions {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @CreateDateColumn({ type: "date" })
  day: Date;

  @CreateDateColumn({ type: "timestamp" })
  hour: Date;

  @OneToOne(() => Rooms)
  @JoinColumn()
  room: string;

  @OneToOne(() => Movies)
  @JoinColumn()
  movie: string;
}
