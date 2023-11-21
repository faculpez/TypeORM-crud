"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const DBHOST = process.env.DBHOST;
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "db.gnyubjjchyneancanfgo.supabase.co",
    username: "postgres",
    password: "cOlR90lpMhMAPIga",
    port: 5432,
    database: "postgres",
    entities: [User_1.User],
    logging: true,
    synchronize: true,
});
