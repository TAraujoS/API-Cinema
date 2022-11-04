import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cinema } from "./cine.entities";
import { Sessions } from "./sessions.entities";

@Entity("rooms")
export class Rooms {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({ nullable: true })
  capacity: number;

  @OneToMany(() => Cinema, (cinema) => cinema.rooms)
  cinema: Cinema;

  @OneToMany(() => Sessions, (session) => session.id)
  @JoinColumn()
  sessions: Sessions[];
}
