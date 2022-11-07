import request from "supertest";
import app from "../../../app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import {
  mockedPaymentInfoJoana,
  mockedPaymentInfoFelipe,
  mockedPaymentInfoAna,
  mockedPaymentInfoExistente1,
  mockedPaymentInfoNumberError,
  mockedPaymentInfoCodeError,
  mockedPaymentInfoDueDateError,
  mockedUserLogin,
} from "../../mocks";

describe("Testing payment route", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /paymentInfo - Should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseCreate1 = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoAna);

    expect(responseCreate1.status).toBe(201);
    expect(responseCreate1.body).toHaveProperty("id");
    expect(responseCreate1.body).not.toHaveProperty("code");
  });

  test("POST /paymentInfo - Should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseCreate2 = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoFelipe);

    expect(responseCreate2.status).toBe(201);
    expect(responseCreate2.body).toHaveProperty("id");
    expect(responseCreate2.body).not.toHaveProperty("code");
  });

  test("POST /paymentInfo - Should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseCreate3 = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoJoana);

    expect(responseCreate3.status).toBe(201);
    expect(responseCreate3.body).toHaveProperty("id");
    expect(responseCreate3.body).not.toHaveProperty("code");
  });

  test("POST /paymentInfo - Not should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseWrongNumber = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoNumberError);

    expect(responseWrongNumber.status).toBe(401);
  });

  test("POST /paymentInfo - Not should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseWrongCode = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoCodeError);

    expect(responseWrongCode.status).toBe(401);
  });

  test("POST /paymentInfo - Not should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseInfoAlreadyExists = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoExistente1);

    expect(responseInfoAlreadyExists.status).toBe(401);
  });

  test("POST /paymentInfo - Not should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseInfoDueDateNotExists = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoDueDateError);

    expect(responseInfoDueDateNotExists.status).toBe(401);
  });

  test("PATCH /paymentInfo - Should be able to update payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseWrongNumber = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoNumberError);

    expect(responseWrongNumber.status).toBe(401);
  });
});
