import { deleteUser } from "../../data/deleteUser"

export const deleteUserBusiness = async (id:string) =>{
    await deleteUser(id)

}