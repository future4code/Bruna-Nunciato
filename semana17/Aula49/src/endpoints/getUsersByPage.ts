import { Request, Response } from "express"
import selectUsersBypage from "../querys/selectUsersByPage"


export const getUsersByPage = async (req: Request, res: Response): Promise<void> => {
    try {

        const page = Number(req.query.page) || 1

        const users = await selectUsersBypage(page)

        res.status(200).send(users)

    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}