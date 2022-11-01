import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm"; 
import { Movies } from "./Movies";
import { User } from "./User";

@Entity("cinema")
export class Cinema{

  @PrimaryGeneratedColumn()
  readonly id : number

  @Column()
  name: string

  @OneToMany(()=>User, (user)=>user.cinema)
  users: string

  @OneToMany(()=>Movies, (movie)=> movie.cinema)
  movies: Movies[]

  // @OneToMany(()=>Rooms, (room)=> room.cinema)
  // rooms : Rooms[]
}