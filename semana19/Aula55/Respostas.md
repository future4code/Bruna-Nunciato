1) a. concordo que seja melhor uma string , pois, pode conter outro caracteres como ponto para separar partes da autenticação.
b. import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }

  2)a. No código atraves da conexao é acessado o banco e inserido as informações passada pelo body, id, email e password, e inserido na tabela 'User' que é chamada pela constante userTableName.
  b. no codigo

  3)
a. faz com que seja aceito como string, pois será uma string o que vier.
b. 
4) no código

5)
const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}

6) no código

7) a. informação pode retornar em um formato qualquer, mas dentro do mesmo já esta retornando parte como string.
b.