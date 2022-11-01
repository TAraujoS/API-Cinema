import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
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

  // @OneToMany(() => Rooms, (rooms) => rooms.sessions)
  // properties: Rooms[];

  @OneToOne(() => Movies)
  @JoinColumn()
  movie: string;
}
