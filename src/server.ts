import app from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(PORT, () => {
    console.log("Servidor executando");
  });
})();
