import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import sessionsRouter from "../routes/sessions.routes";
import { Cinema } from "./cine.entities";
import { Sessions } from "./sessions.entities";

@Entity("rooms")
export class Rooms {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  capacity: string;

  @OneToMany(() => Cinema, (cinema) => cinema.rooms)
  cinema: Cinema;

  @OneToMany(() => Sessions, (session) => session.id)
  @JoinColumn()
  sessions: Sessions[];
}
