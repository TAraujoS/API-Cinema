import { Entity, Column, PrimaryColumn } from "typeorm";

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

  //   @OneToOne(() => Session)
  //   session: Session;
}
