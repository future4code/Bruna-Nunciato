import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

export const postCountryById = (
   req: Request,
   res: Response
): void => {
    console.log( req.body)
   const result: country | undefined = countries.find(
      country => country.id.toString() === req.params.id
   )
   
   if (result) {
    //    result.country.name
      
      res.send("Alteração Efetuada" )
   } else {
      res.statusCode = 404
      res.end()
   }

}