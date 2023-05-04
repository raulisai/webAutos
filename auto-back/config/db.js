import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSW,
  port: process.env.PORTDB,
  database: "autos",
});       