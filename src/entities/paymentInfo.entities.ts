import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("paymentInfo")
export class PaymentInfo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 16 })
  number: string;

  @Column({ type: "date" })
  dueDate: string;

  @Column({ length: 3 })
  @Exclude()
  code: string;
}
