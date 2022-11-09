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
  mockedRoom2,
  mockedRoom3,
  mockedUser,
  mockedRoomUpdate,
  mockedUserLogin,
  mockedUserExistente,
  mockedUserLoginExistente,
  mockedRoom2Error,
  mockedRoom3Error,
} from "../../mocks";

describe("Testing the Room routes", () => {
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

  test("POST /rooms -> Should be able to create a new room", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedCinema);

    const resultCreateRoom = await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoom1);

    expect(resultCreateRoom.status).toBe(201);
    expect(resultCreateRoom.body).toHaveProperty("id");
    expect(resultCreateRoom.body).toHaveProperty("cinema");
  });

  test("POST /rooms -> Must not be able to create a room with less than 30 seats", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const resultCreateRoom = await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoom2Error);

    expect(resultCreateRoom.status).toBe(400);
    expect(resultCreateRoom.body).toHaveProperty("message");
  });

  test("POST /rooms -> Must not be able to create a room with more than 100 seats", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const resultCreateRoom = await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoom3Error);

    expect(resultCreateRoom.status).toBe(400);
    expect(resultCreateRoom.body).toHaveProperty("message");
  });

  test("POST /rooms -  Should not be able to create room not being Admin", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);
    const resultListRoomLogged = await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedRoom1);

    expect(resultListRoomLogged.body).toHaveProperty("message");
    expect(resultListRoomLogged.status).toBe(403);
  });

  test("GET /rooms -  Must be able to list all rooms", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const resultRoomslist = await request(app)
      .get("/rooms")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(resultRoomslist.body);
    expect(resultRoomslist.status).toBe(200);
  });

  test("GET /rooms/:id -  Must be able to list room by Id", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const room = await request(app)
      .get("/rooms")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    const resultRoomListedById = await request(app)
      .get(`/rooms/${room.body[0].id}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(resultRoomListedById.status).toBe(200);
    expect(resultRoomListedById.body).toHaveProperty("id");
  });

  test("PATCH /rooms/:id -  Should be able to update a room. ", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const updateRoom = await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoomUpdate);

    const updateRoomResult = await request(app)
      .patch(`/rooms/${updateRoom.body.id}`)
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`);

    expect(updateRoomResult.body).toHaveProperty("message");
    expect(updateRoomResult.status).toBe(200);
  });

  test("PATCH /rooms/:id -  Should not be able to update room without authentication", async () => {
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdmin);

    const updateroom = await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoomUpdate);

    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLoginExistente);

    const roomToNotBeUpdated = await request(app)
      .patch(`/rooms/${updateroom.body.id}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(roomToNotBeUpdated.body).toHaveProperty("message");
    expect(roomToNotBeUpdated.status).toBe(403);
  });
});
