import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cinema } from "./cine.entities";
import { Sessions } from "./sessions.entities";

@Entity("movies")
export class Movies {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column({ type: "decimal", precision: 2, scale: 1 })
  avaliation: number;

  @Column()
  duration: string;

  @Column()
  onDisplay: boolean;

  @ManyToOne(() => Cinema, { eager: true })
  cinema: Cinema;

  @OneToMany(() => Sessions, (session) => session.movie)
  sessions: Sessions[];
}
