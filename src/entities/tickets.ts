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

  @Column()
  session_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
