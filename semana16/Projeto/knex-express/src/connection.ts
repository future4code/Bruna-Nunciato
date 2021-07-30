import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: "35.226.146.116",
      port: 3306,
      user: "2125472-bruna-nunciato",
      password: "howIs#E$KLBp5ppuIWIR",
      database: "paiva-2125472-bruna-nunciato",
      multipleStatements: true
   },
});

export default connection