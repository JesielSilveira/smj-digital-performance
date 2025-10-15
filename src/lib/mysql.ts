import mysql from "mysql2/promise";

const db = mysql.createPool({
  uri: process.env.MYSQL_URL,
});

export default db;

