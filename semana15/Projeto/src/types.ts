export type User = {
    nome: string,
    cpf: string,
    dataDeNascimento?: Date,
    saldo?: number,
    extrato?: Extrato[]
    } 

export type Extrato = {
      valor: number,
      data: string,
      descricao: string
    }