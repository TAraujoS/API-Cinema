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
  mockedAdmin,
  mockedEmployee,
  mockedUser,
  mockedPaymentPatchInfoAna,
  mockedEmployeeLogin,
} from "../../mocks";

describe("Testing payment route", () => {
  let connection: DataSource;
  let anaResponse;
  let felipeResponse;
  let joanaResponse;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((error) => {
        console.log(error);
      });

    joanaResponse = await request(app).post("/users").send(mockedAdmin);
    felipeResponse = await request(app).post("/users").send(mockedEmployee);
    anaResponse = await request(app).post("/users").send(mockedUser);
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
      .send({ ...mockedPaymentInfoAna, userId: anaResponse.body.id });

    expect(responseCreate1.status).toBe(201);
    expect(responseCreate1.body).toHaveProperty("id");
    expect(responseCreate1.body).not.toHaveProperty("code");
  });

  test("POST /paymentInfo - Should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);

    const responseCreate2 = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send({ ...mockedPaymentInfoFelipe, userId: felipeResponse.body.id });

    expect(responseCreate2.status).toBe(201);
    expect(responseCreate2.body).toHaveProperty("id");
    expect(responseCreate2.body).not.toHaveProperty("code");
  });

  test("POST /paymentInfo - Should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdmin);

    const responseCreate3 = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send({ ...mockedPaymentInfoJoana, userId: joanaResponse.body.id });

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
      .send({ ...mockedPaymentInfoNumberError, userId: anaResponse.body.id });

    expect(responseWrongNumber.status).toBe(400);
  });

  test("POST /paymentInfo - Not should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseWrongCode = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoCodeError);

    expect(responseWrongCode.status).toBe(400);
  });

  test("POST /paymentInfo - Not should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseInfoAlreadyExists = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoExistente1);

    expect(responseInfoAlreadyExists.status).toBe(400);
  });

  test("POST /paymentInfo - Not should be able to create a new payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const responseInfoDueDateNotExists = await request(app)
      .post("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentInfoDueDateError);

    expect(responseInfoDueDateNotExists.status).toBe(400);
  });

  test("PATCH /paymentInfo/:id - Should be able to update payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const getPayment = await request(app)
      .get("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    const responsePatchData = await request(app)
      .patch(`/paymentInfo/${getPayment.body.id}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedPaymentPatchInfoAna);

    expect(responsePatchData.status).toBe(200);
  });

  test("DELETE /paymentInfo/:id - Should be able to delete payment data", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);

    const getPayment = await request(app)
      .get("/paymentInfo")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    console.log(getPayment.body);
    const responseMatchIdUser = await request(app)
      .delete(`/paymentInfo/${getPayment.body.id}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(responseMatchIdUser.status).toBe(204);
  });
});
