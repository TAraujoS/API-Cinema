import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../../app";
import { AppDataSource } from "../../../data-source";
import {
  mockedAdmin,
  mockedAdminLogin,
  mockedCinema,
  mockedCinemaExistent,
  mockedCinemaUpdate,
  mockedEmployeeLogin,
  mockedUser,
  mockedUserLogin,
} from "../../mocks";

describe("/cinema", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    // REQUEST USER CREATION
    await request(app).post("/users").send(mockedAdmin);
    await request(app).post("/users").send(mockedUser);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /cinema -  should be able to create a cinema", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const cinemaCreateResponse = await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedCinema);

    expect(cinemaCreateResponse.body).toHaveProperty("name");
    expect(cinemaCreateResponse.body).toHaveProperty("id");
    expect(cinemaCreateResponse.status).toBe(201);
  });

  test("POST /cinema -  not should be able to create a cinema already exist", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const cinemaCreateResponse = await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedCinemaExistent);

    expect(cinemaCreateResponse.body).toHaveProperty("message");
    expect(cinemaCreateResponse.status).toBe(400);
  });

  test("POST /cinema -  must not be able to create a cinema without authorization", async () => {
    const adminUserResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const cinemaCreateResponse = await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`)
      .send(mockedCinemaExistent);

    expect(cinemaCreateResponse.body).toHaveProperty("message");
    expect(cinemaCreateResponse.status).toBe(401);
  });

  test("PATCH /cinema -  should be able to update a cinema", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const cinemaCreateResponse = await request(app)
      .patch(`/cinema/${1}`)
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedCinemaUpdate);

    expect(cinemaCreateResponse.body).toHaveProperty("name");
    expect(cinemaCreateResponse.body).toHaveProperty("id");
    expect(cinemaCreateResponse.status).toBe(201);
  });

  test("PATCH /cinema -  should be able to update a cinema", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const cinemaCreateResponse = await request(app)
      .patch(`/cinema/${1}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedCinemaUpdate);

    expect(cinemaCreateResponse.body).toHaveProperty("message");
    expect(cinemaCreateResponse.status).toBe(401);
  });
});
