import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";
export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url:
          process.env.NODE_ENV === "production"
            ? process.env.DATABASE_URL
            : `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.HOST}:${process.env.PGPORT}`,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
        synchronize: process.env.NODE_ENV === "production" ? false : true,
        logging: true,
        entities:
          process.env.NODE_ENV === "production"
            ? ["dist/src/entities/*.js"]
            : [path.join(__dirname, "./entities/*.{js,ts}")],
        migrations:
          process.env.NODE_ENV === "production"
            ? ["dist/src/migrations/*.js"]
            : [path.join(__dirname, "./migrations/*.{js,ts}")],
      }
    : {
        type: "postgres",
        host: process.env.HOST,
        port: process.env.PGPORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        synchronize: false,
        logging: true,
        entities: [path.join(__dirname, "./entities/*.{js,ts}")],
        migrations: [path.join(__dirname, "./migrations/*.{js,ts}")],
      }
);
