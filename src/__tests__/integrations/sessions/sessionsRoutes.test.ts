import { DataSource } from "typeorm";
import app from "../../../app";
import { AppDataSource } from "../../../data-source";
import {
  mockedAdmin,
  mockedAdminLogin,
  mockedCinema,
  mockedEmployee,
  mockedEmployeeLogin,
  mockedMovie1,
  mockedMovie2,
  mockedMovie3,
  mockedRoom1,
  mockedRoom2,
  mockedRoom3,
  mockedSession1,
  mockedSession2,
  mockedSession3,
  mockedSessionExistent,
  mockedSessionUpdate,
  mockedUser,
  mockedUserLogin,
} from "../../mocks";
import request from "supertest";

describe("/sessions", () => {
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
    await request(app).post("/users").send(mockedEmployee);
    await request(app).post("/users").send(mockedUser);

    // REQUEST USER LOGIN
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    // REQUEST CINE CREATION WITH ADMIN TOKEN
    await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedCinema);

    // REQUEST ROOM CREATION
    await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoom1);

    await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoom2);

    await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoom3);

    // REQUEST MOVIE CREATION
    await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie1);
    await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie2);
    await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie3);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /sessions -  should be able to create a session 1", async () => {
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const session1CreateResponse = await request(app)
      .post("/sessions")
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`)
      .send(mockedSession1);

    expect(session1CreateResponse.body).toHaveProperty("session");
    expect(session1CreateResponse.status).toBe(201);
  });

  test("POST /sessions -  should be able to create a session 2", async () => {
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const session2CreateResponse = await request(app)
      .post("/sessions")
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`)
      .send(mockedSession2);

    expect(session2CreateResponse.body).toHaveProperty("session");
    expect(session2CreateResponse.status).toBe(201);
  });

  test("POST /sessions -  should be able to create a session 3", async () => {
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const session3CreateResponse = await request(app)
      .post("/sessions")
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`)
      .send(mockedSession3);

    expect(session3CreateResponse.body).toHaveProperty("session");
    expect(session3CreateResponse.status).toBe(201);
  });

  test("POST /sessions -  should not be able to create a session with a date and time already scheduled ", async () => {
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const session4CreateResponse = await request(app)
      .post("/sessions")
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`)
      .send(mockedSessionExistent);

    expect(session4CreateResponse.body).toHaveProperty("message");
    expect(session4CreateResponse.status).toBe(400);
  });

  test("PATCH /sessions -  should be able to update a session. ", async () => {
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const session1CreateResponse = await request(app)
      .patch(`/sessions/${1}`)
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`)
      .send(mockedSessionUpdate);

    expect(session1CreateResponse.body).toHaveProperty("session");
    expect(session1CreateResponse.status).toBe(201);
  });

  test("GET /sessions -  should be able to list all sessions. ", async () => {
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const session1CreateResponse = await request(app)
      .get("/sessions")
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`);

    expect(session1CreateResponse.body).toHaveProperty("sessions");
    expect(session1CreateResponse.status).toBe(200);
  });
});
