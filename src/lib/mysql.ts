import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",      // ou IP do servidor MySQL
  user: "root",           // seu usuário MySQL
  password: "45ab17df", // sua senha
  database: "minha_empresa",
});