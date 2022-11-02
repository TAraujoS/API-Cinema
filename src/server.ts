import app from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config";

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  AppDataSource.initialize()
    .then(() => console.log("Database initialized"))
    .catch((err) => console.error(err));

  console.log(`Server is running on localhost:${PORT}`);
});
