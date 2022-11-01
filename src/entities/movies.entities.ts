import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Cinema } from "./cine.entities";

@Entity("movies")
export class Movies {
  @PrimaryGeneratedColumn("uuid")
  readonly id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column({ type: "float", precision: 1, scale: 1 })
  avaliation: number;

  @Column({ type: "float", precision: 4, scale: 2 })
  duration: number;

  @Column()
  onDisplay: boolean;

  @ManyToOne(()=>Cinema, {eager:true})
  cinema: Cinema
}
