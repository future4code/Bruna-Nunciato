import { UserBusiness } from "../src/business/UserBusiness";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { HashGeneratorMock } from "./mocks/HashGeneratorMock";
import { TokenGeneratorMock } from "./mocks/TokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";
import { UserDatabase } from "../src/data/UserDatabase";
import { User, USER_ROLES } from "../src/model/User";

const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashGeneratorMock(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as unknown as UserDatabase
)

describe("Testando o signup", ()=>{

    test("Deve retornar erro quando nome está vazio", async ()=>{
        expect.assertions(1);
        try {

            await userBusinessMock.signup(
                "",
                "joao@email.com",
                "blius",
                "normal"
            );
      
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("Missing input");
        }
    }
    });

    it("Deve retornar erro quando o email não tem arroba", async ()=>{
        expect.assertions(1);

        try {
            await userBusinessMock.signup(
                "João",
                "joao.email.com",
                "blius",
                "normal"
            );

            
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("Invalid email");
        }
    }

    });

    test("Deve retornar erro ao receber senha com 5 caracteres ou menos", async ()=>{
        expect.assertions(1);
        try {
            await userBusinessMock.signup(
                "João",
                "joao@email.com",
                "blius",
                "normal"
            );
            
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("Invalid password")
        }
    }
    });

    test("Deve retornar erro ao não receber user role normal ou admin", async ()=>{
        expect.assertions(1);
        try {

            await userBusinessMock.signup(
                "João",
                "joao@email.com",
                "blius123",
                "GUEST"
            );
            
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("Invalid user role");        
        }
    }
    });

    test("Sucesso no cadastro", async ()=>{
        expect.assertions(1);

        const {accessToken}:any = await userBusinessMock
        .signup("João",
        "joao@email.com",
        "blius123",
        "ADMIN");

        expect(accessToken).toEqual("token_mock");

    });

});

describe("Testando o login", ()=>{

    test("Deve retornar erro ao não encontrar usuário no banco", async ()=>{
        expect.assertions(1);
        try {

            await userBusinessMock.login("joao@email.com", "12345678");
            
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("Invalid credentials");
            }
        }
    });

    test("Deve retornar erro ao receber senha incorreta de usuário", async()=>{
        expect.assertions(1);

        try {

            await userBusinessMock.login("astrodev@gmail.com", "12345678");
            
        } catch (error) {
            if (error instanceof Error) {
            expect(error.message).toEqual("Invalid credentials");
            }
        }
    });

    test("Deve retornar token de acesso quando os dados estão corretos", async ()=>{
        expect.assertions(1);
        
        const {accessToken}:any = await userBusinessMock.login("astrodev@gmail.com", "astrodev123");
        expect(accessToken).toEqual("token_mock");

    });
})

describe("testando getProfileById", () =>{

    test("Deve retornar erro no id ", async () =>{
        expect.assertions(1);
        try{
            await userBusinessMock.getProfileById("123566")

        }catch(error){
            if(error instanceof Error){
                expect(error.message).toEqual("User not found")
            }
        }
    })

    test("Deve encontrar usuario mocado e nao dar erro ", async () =>{
        expect.assertions(1);
        try{
       
           const result = await userBusinessMock.getProfileById("id_mock_normal")

            expect(result).toEqual({
            id: "id_mock_normal",
            name: "bananinha",
            email: "bananinha@gmail.com",
            role: "NORMAL",
            })

        }catch(error){
          console.log(error)
         }
        })
})