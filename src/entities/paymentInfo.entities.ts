import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_infos")
export class PaymentInfo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 16 })
  number: string;

  @Column({ type: "date" })
  dueDate: Date;

  @Column({ length: 3 })
  code: string;
}
