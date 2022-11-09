import request from "supertest";
import app from "../../../app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { IMovies } from "../../../interfaces/movies";
import { mockedMovie1, mockedMovie2, mockedMovie4 } from "../../mocks/index";
import { mockedUser } from "../../mocks/index";
import { mockedUserExistente } from "../../mocks/index";
import { mockedUserLoginExistente } from "../../mocks/index";
import { mockedAdmin } from "../../mocks/index";
import { mockedEmployee } from "../../mocks/index";
import { mockedUserLogin } from "../../mocks/index";
import { mockedAdminLogin } from "../../mocks/index";
import { mockedEmployeeLogin } from "../../mocks/index";
import { mockedCinema } from "../../mocks/index";
import { response } from "express";

describe("Testing movie routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.log(err);
      });
    await request(app).post("/users").send(mockedUser);
    await request(app).post("/users").send(mockedUserExistente);
    await request(app).post("/users").send(mockedAdmin);
    await request(app).post("/users").send(mockedEmployee);
    await request(app).post("/cinema").send(mockedCinema);
  });
  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /movies -> Must be able to create a Movie", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedCinema);

    const resultMovie = await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie1);

    expect(resultMovie.status).toBe(201);
    expect(resultMovie.body).toHaveProperty("name");
    expect(resultMovie.body).toHaveProperty("cinema");
  });

  test("POST /movies -> Should not be able to create a Movie that already exists", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const resultMovie = await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie1);

    expect(resultMovie.status).toBe(400);
    expect(resultMovie.body).toHaveProperty("message");
  });

  test("POST /movies -  Should not be able to create movies not being Admin", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);
    const resultListMoviesLogged = await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedMovie1);

    expect(resultListMoviesLogged.body).toHaveProperty("message");
    expect(resultListMoviesLogged.status).toBe(403);
  });

  //

  test("GET /movies -  Must be able to list all movies", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const resultMovieslist = await request(app)
      .get("/movies")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(resultMovieslist.body);
    expect(resultMovieslist.status).toBe(200);
  });

  test("GET /movies/:id -  Must be able to list movie by Id", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const movie = await request(app)
      .get("/movies")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    const resultMovieListedById = await request(app)
      .get(`/movies/${movie.body[0].id}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(resultMovieListedById.status).toBe(200);
    expect(resultMovieListedById.body).toHaveProperty("id");
    expect(resultMovieListedById.body).toHaveProperty("name");
  });

  test("GET /movie -  Should not be able to list movies without authentication", async () => {
    const resultNotListedMovies = await request(app).get("/movies");

    expect(resultNotListedMovies.body).toHaveProperty("message");
    expect(resultNotListedMovies.status).toBe(401);
  });

  test("DELETE /movies/:id -  Must not be able to delete movie without Admin", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLoginExistente);
    const movieTobeDeleted = await request(app)
      .get("/movies")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    const response = await request(app)
      .delete(`/movies/${movieTobeDeleted.body[0].id}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);
    expect(response.status).toBe(403);
  });

  test("DELETE /movies/:id -  Must be able to delete movie", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const newMovie = await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie2);

    const movieTobeDeleted = await request(app)
      .get(`/movies/${newMovie.body.id}`)
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`);

    const response = await request(app)
      .delete(`/movies/${movieTobeDeleted.body.id}`)
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
    expect(response.status).toBe(204);
  });

  test("PATCH /movies/:id -  Should be able to update a movie. ", async () => {
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdmin);

    const newMovie = await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`)
      .send(mockedMovie4);

    console.log(newMovie.body);
    console.log(mockedMovie4);

    const movieTobeUpdated = await request(app)
      .patch(`/movies/${newMovie.body.id}`)
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`);

    expect(movieTobeUpdated.body).toHaveProperty("message");
    expect(movieTobeUpdated.status).toBe(200);
  });

  test("PATCH /movies/:id -  Should not be able to update movie without authentication", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdmin);
    const newMovie = await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie2);

    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLoginExistente);

    const movieToNotBeUpdated = await request(app)
      .patch(`/movies/${newMovie.body.id}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(movieToNotBeUpdated.body).toHaveProperty("message");
    expect(movieToNotBeUpdated.status).toBe(403);
  });
});
