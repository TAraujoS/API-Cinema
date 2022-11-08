import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sessions } from "./sessions.entities";
import { User } from "./user.entities";

@Entity("tickets")
export class Tickets {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: 15 })
  price: number;

  @Column({ nullable: true })
  chair: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Sessions, { onDelete: "CASCADE" })
  @JoinColumn()
  session: Sessions;
}
