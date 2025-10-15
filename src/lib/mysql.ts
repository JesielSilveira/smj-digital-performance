import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,       // srv791.hstgr.io ou 45.152.44.1
  user: process.env.DB_USER,       // seu usuário MySQL
  password: process.env.DB_PASSWORD, // sua senha MySQL
  database: process.env.DB_NAME,   // u770439152_minha_empresa
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;

