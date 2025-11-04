import mysql, { Pool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db: Pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "nome_do_banco",
  port: Number(process.env.DB_PORT) || 3306,
});

export default db;

