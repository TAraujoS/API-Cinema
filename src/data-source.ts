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
    : {
        type: "postgres",
        url:
          process.env.NODE_ENV === "production"
            ? process.env.DATABASE_URL
            : `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.HOST}:${process.env.PGPORT}`,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,

        synchronize: process.env.NODE_ENV === "production" ? false : true,
        logging: true,
        entities:
          process.env.NODE_ENV === "production"
            ? ["dist/entities/*.js"]
            : ["src/entities/*.ts"],
        migrations:
          process.env.NODE_ENV === "production"
            ? ["dist/migrations/*.js"]
            : ["src/migrations/*.ts"],
      }
);
