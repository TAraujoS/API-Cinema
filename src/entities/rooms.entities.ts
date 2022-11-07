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

  @Column()
  capacity: number;

  @ManyToOne(() => Cinema, (cinema) => cinema.rooms)
  @JoinColumn()
  cinema: Cinema;

  @OneToMany(() => Sessions, (session) => session.room, {cascade:true})
  sessions: Sessions[];
}
