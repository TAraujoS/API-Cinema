import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Cinema } from "./cine.entities";
import { Sessions } from "./sessions.entities";

@Entity("movies")
export class Movies {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column({ type: "decimal", precision: 1, scale: 1 })
  avaliation: number;

  @Column()
  duration: string;

  @Column()
  onDisplay: boolean;

  @ManyToOne(() => Cinema, { eager: true })
  cinema: Cinema;

  @ManyToOne(() => Sessions, { eager: true })
  sessions: Sessions[];
}
