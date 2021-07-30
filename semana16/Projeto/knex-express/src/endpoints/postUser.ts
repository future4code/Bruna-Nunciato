import { Request, Response } from "express";
import connection from "../connection";

export const postUser =  async(req:Request, res:Response) => {
    try {
        const splitDate = req.body.limitDate.split("/")
        const correctedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
        const result = await connection.raw(`
        INSERT INTO Task (id, title, description, limitDate, creatorUserId)
        VALUES(
            " ${req.body.id = Date.now().toString()}",
            "${req.body.title}",
            "${req.body.description}",
            "${correctedDate}",
            "${req.body.creatorUserId}"
        );
            `)
            res.status(200).send("A new task has been created!")
    } catch (err:any) {
        res.status(400).send({
            message: err.message
    })
  }}