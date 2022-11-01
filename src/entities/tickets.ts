import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tickets")
export class Ticket {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  chair: string;

  //   @OneToOne(() => Session)
  //   session: Session;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
