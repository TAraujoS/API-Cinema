import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../../app";
import { AppDataSource } from "../../../data-source";
import {
  mockedAdmin,
  mockedAdminLogin,
  mockedCinema,
  mockedEmployee,
  mockedMovie1,
  mockedRoom1,
  mockedSession1,
  mockedTicketChair1,
  mockedTicketChairError,
  mockedUser,
  mockedUserLogin,
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

    await request(app).post("/users").send(mockedAdmin);
    await request(app).post("/users").send(mockedEmployee);
    await request(app).post("/users").send(mockedUser);

    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    await request(app)
      .post("/cinema")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedCinema);

    await request(app)
      .post("/rooms")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedRoom1);

    await request(app)
      .post("/movies")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedMovie1);

    await request(app)
      .post("/sessions")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
      .send(mockedSession1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /tickets -  Should be able to create a ticket", async () => {
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

  test("POST /tickets -  Should not be able to create a ticket with chair already in use", async () => {
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

  test("POST /tickets -  Should not be able to create a ticket without authorization", async () => {
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

  test("GET /tickets -  Must be able to list all tickets. ", async () => {
    const admLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const ticketCreateResponse = await request(app)
      .get("/tickets")
      .set("Authorization", `Bearer ${admLoginResponse.body.token}`);

    expect(ticketCreateResponse.body).toHaveLength(1);
    expect(ticketCreateResponse.status).toBe(200);
  });

  test("GET /tickets -  Should not be able to list all tickets without authorization", async () => {
    const userResponse = await request(app).get("/login").send(mockedUserLogin);

    const ticketsCreateResponse = await request(app)
      .get("/tickets")
      .set("Authorization", `Bearer ${userResponse.body.token}`)
      .send(mockedTicketChair1);

    expect(ticketsCreateResponse.body).toHaveProperty("message");
    expect(ticketsCreateResponse.status).toBe(401);
  });

  test("GET /tickets -  Should not be able to list all tickets not being Employee", async () => {
    const userResponse = await request(app).get("/login").send(mockedUserLogin);

    const ticketsCreateResponse = await request(app)
      .get("/tickets")
      .set("Authorization", `Bearer ${userResponse.body.token}`)
      .send(mockedTicketChair1);

    expect(ticketsCreateResponse.body).toHaveProperty("message");
    expect(ticketsCreateResponse.status).toBe(401);
  });

  test("GET /tickets/:id -  Must be able to list ticket by Id", async () => {
    await request(app).post("/users").send(mockedAdmin);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const ticket = await request(app)
      .get("/tickets")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);
    const resultTicketListedById = await request(app)
      .get(`/tickets/${ticket.body[0].id}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(resultTicketListedById.status).toBe(200);
    expect(resultTicketListedById.body).toHaveProperty("id");
    expect(resultTicketListedById.body).toHaveProperty("chair");
  });

  test("GET /tickets/:id -  Should not be able to list ticket with invalid Id", async () => {
    await request(app).post("/users").send(mockedAdmin);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);

    const resultTicketListedById = await request(app)
      .get(`/tickets/3016fc2b-b609-425a-a164-de33e365040a`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(resultTicketListedById.status).toBe(404);
    expect(resultTicketListedById.body).toHaveProperty("message");
  });
});
