import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
