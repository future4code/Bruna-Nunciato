import {User} from './types'

export let users: User[] = [
    {
        nome: "Bruna",
        cpf: "123.123.123-90",
        // dataDeNascimento: ,
        saldo: 4000,
        extrato:[
            {
                valor: 100,
                data: "21/03/2021",
                descricao: "cabelereiro"
            },
            {
                valor: 50,
                data: "04/06/2021",
                descricao: "restaurante"
            }
        ]
    },
  ]
