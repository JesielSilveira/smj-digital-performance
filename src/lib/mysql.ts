import mysql, { Pool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db: Pool = mysql.createPool({
  host: process.env.DB_HOST || "srv791.hstgr.io",
  user: process.env.DB_USER || "u770439152_smjdigital",
  password: process.env.DB_PASS || "45ab17dF.",
  database: process.env.DB_NAME || "u770439152_minha_empresa",
  port: Number(process.env.DB_PORT) || 3306,
});

export default db;

