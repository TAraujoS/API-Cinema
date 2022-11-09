import request from "supertest";
import app from "../../../app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import {
  mockedAdmin,
  mockedAdminLogin,
  mockedCinema,
  mockedEmployee,
  mockedEmployeeLogin,
  mockedRoom1,
  mockedUser,
  mockedRoomUpdate,
} from "../../mocks";

describe("Testing the Room routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    await request(app).post("/users").send(mockedUser);
    await request(app).post("/users").send(mockedAdmin);
    await request(app).post("/users").send(mockedEmployee);

    const adminLogin = await request(app).post("/login").send(mockedAdminLogin);

    await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminLogin.body.token}`)
      .send(mockedCinema);

    await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLogin.body.token}`)
      .send(mockedRoom1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /rooms -> Should be able to create a new room", async () => {
    const employeeLogin = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const resultCreateRoom = await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${employeeLogin.body.token}`)
      .send(mockedRoom1);

    expect(resultCreateRoom.status).toBe(201);
    expect(resultCreateRoom.body).toHaveProperty("room");
  });

  test("GET /rooms -  should be able to list all rooms. ", async () => {
    const employeeLogin = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const resultCreateRoomList = await request(app)
      .get("/rooms")
      .set("Authorization", `Bearer ${employeeLogin.body.token}`);

    expect(resultCreateRoomList.body).toHaveProperty("room");
    expect(resultCreateRoomList.status).toBe(200);
  });

  test("PATCH /rooms -  should be able to update a room. ", async () => {
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const updateRoomResult = await request(app)
      .patch(`/rooms/${1}`)
      .set("Authorization", `Bearer ${employeeLoginResponse.body.token}`)
      .send(mockedRoomUpdate);

    expect(updateRoomResult.body).toHaveProperty("rooms");
    expect(updateRoomResult.status).toBe(201);
  });
});
