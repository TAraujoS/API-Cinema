import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
  
  @Column()
  birthDate: Date

  @Column({default : true})
  isActive: boolean

  @Column({default: false})
  isAdm: boolean

  @Column({default: false})
  isEmploee: boolean

  @Column()
  contact : string

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt : Date

  @UpdateDateColumn()
  updatedAt : Date
  
  // @OneToOne(()=> Ticket)@JoinColumn()
  // ticket: string

  // @OneToOne (()=> PaymentInfo)@JoinColumn()
  // paymentInfo: string

}
