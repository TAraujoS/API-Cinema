import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cinema } from "./cine.entities";
import { PaymentInfo } from "./paymentInfo.entities";
import { Tickets } from "./tickets.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  birthDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdm: boolean;

  @Column({ default: false })
  isEmployee: boolean;

  @Column()
  contact: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Tickets, (tickets) => tickets.user)
  @JoinColumn()
  tickets: Tickets[];

  @OneToOne(() => PaymentInfo, { eager: true })
  @JoinColumn()
  paymentInfo: string;

  @ManyToOne(() => Cinema, { eager: true })
  cinema: Cinema;
}
