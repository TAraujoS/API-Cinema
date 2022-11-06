import { DataSource } from "typeorm";
import app from "../../../app";
import { AppDataSource } from "../../../data-source";
import {
  mockedAdmin,
  mockedAdminLogin,
  mockedEmployee,
  mockedEmployeeLogin,
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
    const adminCreationResponse = await request(app)
      .post("/users")
      .send(mockedAdmin);
    const employeeCreationResponse = await request(app)
      .post("/users")
      .send(mockedEmployee);
    const userCreationResponse = await request(app)
      .post("/users")
      .send(mockedUser);

    // REQUEST USER CREATION
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedAdminLogin);
    const employeeLoginResponse = await request(app)
      .post("/login")
      .send(mockedEmployeeLogin);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedUserLogin);
  });
});
