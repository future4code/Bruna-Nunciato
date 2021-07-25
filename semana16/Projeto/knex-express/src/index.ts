import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import { editUserById } from "./endpoints/editUserById";
import { getUserById } from "./endpoints/getUserById";
import { postTask } from "./endpoints/postTask";
import { postUser } from "./endpoints/postUser";

app.post("/user", postUser )
  
  app.get("/user/:id", getUserById)


  app.put("/user/edit/:id", editUserById)


app.post("/task", postTask)
  
   

  // const getTaskById = async (id: string): Promise<any> => {
  //   const result = await connection.raw(
  //   `SELECT * FROM Task WHERE id = ${id}`
  //    );
  //   return result[0];
  // };
  
  // app.get("/task/:id", async (req: Request, res: Response) => {
  //   try {
  //     const id = req.params.id;
  //     const task = await connection.raw(`
  //     SELECT * FROM Users INNER JOIN Task ON Users.id = ${id};
  // `);
  //     res.status(200).send(task);
  //   } catch (err:any) {
  //     res.status(500).send({
  //       message: err.message,
  //     });
  //   }
  // });


  app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
        SELECT Task.id, title, description, limitDate, creatorUserId, nickname  
        FROM Task 
        JOIN Users ON creatorUserId = Users.id
        WHERE Task.id = ${req.params.id};
        `)
  
        res.status(200).send(result[0])
  
    } catch (err:any) {
        res.status(400).send({
            message: err.message
        })
    }
  })