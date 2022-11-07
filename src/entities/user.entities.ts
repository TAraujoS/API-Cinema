import { Exclude } from "class-transformer";
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
import { v4 as uuid } from "uuid";
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
  birthDate: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdm: boolean;

  @Column({ default: false })
  isEmployee: boolean;

  @Column()
  contact: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Tickets, (tickets) => tickets.user, {eager:true})
  tickets: Tickets[];

  @OneToOne(() => PaymentInfo, { eager: true, cascade:true })
  @JoinColumn()
  paymentInfo: PaymentInfo;

  @ManyToOne(() => Cinema, { eager: true })
  @Exclude()
  cinema: Cinema;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
