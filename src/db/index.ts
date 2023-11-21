import { DataSource } from "typeorm";
import { User } from "../entities/User";

const DBHOST = process.env.DBHOST;
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
const DBNAME = process.env.DBNAME;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DBHOST,
  username: DBUSER,
  password: DBPASSWORD,
  port: 5432,
  database: DBNAME,
  entities: [User],
  logging: true,
  synchronize: true,
});
