import { Request, Response } from "express";
import moment from "moment";
import connection from "../connection";


export const getTaskById =  async (req: Request, res: Response) => {
      try {
          const result = await connection.raw(`
          SELECT Task.id, title, description, limitDate, creatorUserId, nickname  
          FROM Task 
          JOIN Users ON creatorUserId = Users.id
          WHERE Task.id = ${req.params.id}
          `)
    
          res.status(200).send(result[0])
    
      } catch (err:any) {
          res.status(400).send({
              message: err.message
          })
      }
    }














// UMA HORA FUNCIONA E OUTRA NÃO




// async (req:Request, res:Response)=>{
//    const result = await connection.raw(`
// SELECT T.*, U.nickname FROM Task AS T
// jOIN Users AS U    ON U.id = creatorUserId WHERE T.id=${req.params.id}
// `)
//     try {

//         if (!result){
//           res.status(404).send({message:"not found" })
//           return 
//               }
//               res.status(200).send(...result,
//                 // limitDate:moment(result.limitDate,  `YYYY-MM-DD`).format(`DD/MM/YYYY`)
//                  )
//         }
//         catch (error: any){
//             res.status(400).send({
//                 message: error.message || error.sqlMessage
//             })
//         }
//     }



