import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("rooms")
export class Rooms {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  capacity: string;

  // @OneToMany(() => Session, (session) => session.rooms)
  // sessions: Session[];
}
