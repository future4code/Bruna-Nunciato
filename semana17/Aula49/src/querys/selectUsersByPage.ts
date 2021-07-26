import { connection } from "../data/connection"

export default async function selectUsersBypage(page: number): Promise<any> {
    const result = await connection("aula48_exercicio")
        .select("id", "name", "email", "type")
        .limit(5)
        .offset(5*(page-1))

    return result
}