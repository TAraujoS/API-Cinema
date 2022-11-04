import request from "supertest";
import app from "../../../app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { IPaymentRequest } from "../../../interfaces/payments";

const paymentData: IPaymentRequest = {
  name: "Maria Joaquina",
  number: "1478523698745632",
  dueDate: "2022-12-24",
  code: "123",
};

const paymentWrongNumber: IPaymentRequest = {
  name: "Maria Joaquina",
  number: "147852369874563",
  dueDate: "2022-12-24",
  code: "123",
};

const paymentWrongCode: IPaymentRequest = {
  name: "Maria Joaquina",
  number: "147852369874563",
  dueDate: "2022-12-24",
  code: "12",
};

const paymentNoDueDate: IPaymentRequest = {
  name: "Maria Joaquina",
  number: "147852369874563",
  dueDate: "",
  code: "123",
};

describe("Testando rotas de informações de pagamento", () => {
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

  test("POST /paymentInfo : Deve ser capaz de criar novos dados de pagamento", async () => {
    const responseCreate = await request(app)
      .post("/paymentInfo")
      .send(paymentData);

    const responseWrongNumber = await request(app)
      .post("/paymentInfo")
      .send(paymentWrongNumber);

    const responseWrongCode = await request(app)
      .post("/paymentInfo")
      .send(paymentWrongCode);

    const responseNoDueData = await request(app)
      .post("/paymentInfo")
      .send(paymentNoDueDate);

    expect(responseCreate.status).toBe(201);
    expect(responseWrongNumber.status).toBe(400);
    expect(responseWrongCode.status).toBe(400);
    expect(responseNoDueData.status).toBe(400);

    expect(responseCreate.body).toHaveProperty("id");
    expect(responseCreate.body).not.toHaveProperty("code");
  });
});
