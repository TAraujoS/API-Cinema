import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sessions } from "./sessions.entities";
import { User } from "./user.entities";
import { v4 as uuid } from "uuid";

@Entity("tickets")
export class Tickets {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: 15 })
  price: number;

  @Column({ nullable: true })
  chair: number;

  @ManyToOne(() => User,  {cascade: true})
  @JoinColumn()
  user: User;

  @OneToOne(() => Sessions)
  @JoinColumn()
  session: Sessions;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
