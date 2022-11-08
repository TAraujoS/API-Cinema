import request from "supertest";
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
  mockedRoom1,
  mockedSession1,
  mockedTicketChair1,
  mockedTicketChair2,
  mockedTicketChair3,
  mockedTicketChairError,
  mockedUser,
  mockedUserLoginNoExistent,
} from "../../mocks";

describe("/tickets", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    // Req user
    await request(app).post("/users").send(mockedAdmin);
    await request(app).post("/users").send(mockedEmployee);
    await request(app).post("/users").send(mockedUser);

    // Req user login
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    // Req cine
    await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedCinema);

    // Req room
    await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoom1);

    // Req movie
    await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie1);

    // Req session
    await request(app)
      .post("/sessions")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedSession1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /tickets -  should be able to create a ticket", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUser);

    const ticketsCreateResponse = await request(app)
      .post("/tickets")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedTicketChair1);

    expect(ticketsCreateResponse.body).toHaveProperty("chair");
    expect(ticketsCreateResponse.body).toHaveProperty("session");

    expect(ticketsCreateResponse.status).toBe(201);
  });

  test("POST /tickets -  not should be able to create a ticket with chair already in use", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUser);

    const ticketsCreateResponse = await request(app)
      .post("/tickets")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedTicketChairError);

    expect(ticketsCreateResponse.body).toHaveProperty("message");
    expect(ticketsCreateResponse.status).toBe(400);
  });

  test("POST /tickets -  must not be able to create a ticket without authorization", async () => {
    const userResponse = await request(app)
      .post("/login")
      .send(mockedUserLoginNoExistent);

    const ticketsCreateResponse = await request(app)
      .post("/tickets")
      .set("Authorization", `Bearer ${userResponse.body.token}`)
      .send(mockedTicketChair1);

    expect(ticketsCreateResponse.body).toHaveProperty("message");
    expect(ticketsCreateResponse.status).toBe(401);
  });

  test("GET /tickets -  should be able to list all tickets. ", async () => {
    const admLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const ticketCreateResponse = await request(app)
      .get("/tickets")
      .set("Authorization", `Bearer ${admLoginResponse.body.token}`);

    expect(ticketCreateResponse.body).toHaveProperty("tickets");
    expect(ticketCreateResponse.status).toBe(200);
  });
});
