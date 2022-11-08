import { Exclude } from "class-transformer";
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @ManyToOne(() => User, { cascade: true })
  @Exclude()
  user: User;

  @ManyToOne(() => Sessions)
  session: Sessions;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
