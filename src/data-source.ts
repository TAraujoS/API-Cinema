import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: process.env.PGPORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, "./entities/*.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/*.{js,ts}")],
});
