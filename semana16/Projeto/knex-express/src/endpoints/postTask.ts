import { Request, Response } from "express";
import connection from "../connection";
import moment from 'moment'

export const postTask = async ( req: Request, res: Response)=>{
    const { title, description, status, limitDate, creatorUserId } = req.body
        
    try {
        if (!title || !description || !status || !limitDate || !creatorUserId  ){
                       res.status(400).send({
                           message: "please check the fields"
                       })
                       return
                      }
                      const dateDiff : number = moment ( req.body.limitDate, 'DD/MM/YYYY').unix() - moment().unix() 
                      
                      if (dateDiff <= 0){
                        res.status(400).send({
                            message: "field future date for limitDate"

                      })
                      return 
                        }
                        const id: string = Date.now() + Math.random().toString()
                        await connection("Task").insert({
                             id,
                            title,
                            description,
                            status,
                            limitDate,
                            creatorUserId 
                        })
                        res.status(201).send({
                            message: "sucess",
                            id
                        })
             }
             catch (error:any){
                 res.status(400).send({
                     message: error.message || error.sqlMessage
                 })
             }
            }
        


//TENTEI DOS DOIS JEITOS E AMBOS DÃO ERRO NA DATA


// async (
//         req: Request, res: Response 
//     )=>{
//         let errorCode = 400
//         try{
//           console.log(req.body.dateAsString)
//         const { title, description, status, limitDate, creatorUserId } = req.body
        
//         const dateDiff : number = moment ( req.body.limitDate, 'DD/MM/YYYY').unix() - moment().unix() 
//         // const dateAsString = limitDate.split("/");
//         // const date = `${dateAsString[2]}/${dateAsString[1]}/${dateAsString[0]}`;
//         const newTask ={
//             id: Date.now().toString(),
//             title, 
//             description, 
//             limitDate: dateDiff,
//             status, 
//             creatorUserId 
//           };
      
//         if ( !title && !description && !status && !limitDate && !creatorUserId  ){
//             errorCode = 422;
//             throw new Error("Please check the fields!");
//           }
      
//           await connection("Task").insert(newTask)
      
//            res.status(201).send({message: `Sucess!new task`,id});
//         } catch (error:any) {
//           res.status(400).send(error.sqlMessage || error.message);
//         }
//       }