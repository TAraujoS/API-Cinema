import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Sessions } from "./sessions.entities";
import { User } from "./user.entities";

@Entity("tickets")
export class Tickets {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ default: 15 })
  price: number;

  @Column()
  chair: number;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @OneToOne(() => Sessions)
  @JoinColumn()
  session: Sessions;
}
