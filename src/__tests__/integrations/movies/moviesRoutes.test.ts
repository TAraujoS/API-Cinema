import request from "supertest";
import app from "../../../app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { IMovies } from "../../../interfaces/movies";

describe("Testando rotas de movies", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /movies -> Deve ser capaz de criar um Movie", () => {});
});
