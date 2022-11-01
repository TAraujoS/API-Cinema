import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Sessions } from "./sessions.entities";
import { User } from "./user.entities";

@Entity("tickets")
export class Tickets {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  chair: string;

  @OneToOne(() => Sessions)
  @JoinColumn()
  session: Sessions;
}
