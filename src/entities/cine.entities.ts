import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Movies } from "./movies.entities";
import { Rooms } from "./rooms.entities";
import { User } from "./user.entities";

@Entity("cinema")
export class Cinema {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.cinema)
  users: string;

  @OneToMany(() => Movies, (movies) => movies.cinema)
  movies: Movies[];

  @OneToMany(() => Rooms, (rooms) => rooms.cinema)
  rooms: Rooms[];
} 
