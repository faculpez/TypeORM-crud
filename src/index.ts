import "reflect-metadata";
require("dotenv").config();
import app from "./app";
import { AppDataSource } from "./db";

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");

    app.listen(PORT);
    console.log("Server is listening on port", PORT);
  } catch (error) {
    console.error("Error during initialization:", error);
  }
};
main();
