import app from "./app";
import connection from "./connection";

app.get("/", async (req, res) => {
  try {
    const result = await connection("Actor");

    res.status(200).send(result);
    console.log(await result)
  } catch (error:any) {
      
    res.status(400).send(error.sqlMessage || error.message);
  }
});


import { Request, Response } from "express"

// Esse arquivo seria o index.ts

// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `)

// 	return result[0][0]
// }


// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// // Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error:any) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal






const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
  }

    searchActor("Alice Braga")
      .then(result => {
          console.log(result)
      })
      .catch(err => {
          console.log(err)
      });


    //   const byGender = async (gender: string): Promise<any> => {
    //       const result = await connection.raw(`
    //       SELECT COUNT(*) FROM Actor WHERE gender = "${gender}";
    //       `)
    //       return result [0]
    //   }
      
    //   byGender("male")
    //   .then(result => {
    //       console.log(result)
    //   })
    //   .catch(err => {
    //       console.log(err)
    //   });

    const countActors = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);
    
        const count = result[0][0].count;
        return count;
      };
      countActors("male")
      .then(count =>{
          console.log(`result: ${count}`)
      })
      .catch(erro =>{
          console.log(erro)
      })


    //   const updateSalary = async(id: string, salary:number): Promise<any> =>{
    //       const salaryUpdate =  await connection("Actor")
    //       .update({
    //         salary: salary
    //          })
    //          .where({ id: id });
            
             
    //        return salaryUpdate
    //        }

    //        updateSalary ("002", 300000 )
    //        .then (salaryUpdate =>{
    //            console.log(`update: ${salaryUpdate}`)
    //        })

    // const updateActor = async (id: string, salary:number): Promise<any> => {
    //     const result = await connection("Actor").update({
    //       salary: salary,
    //     }).where("id", id);
      
    //   };
    //     updateActor("005", 2000)
    //     .then(result => {
    //       console.log(result)
    //       console.log("salary updated")
    //     })
    //     .catch(err => {
    //       console.log(err)
    //      });

         
         
         const deleteActor = async (id: string): Promise<void> => {
            const result = await connection("Actor")
              .delete()
              .where("id", id);
          }; 
          
            deleteActor("005")
            .then(result => {
              console.log(result)
              console.log("deletado com sucesso")
            })
            .catch(err => {
              console.log(err)
            });
            

            
            
            const avgSalary = async (gender: string): Promise<any> => {
                const result = await connection("Actor")
                  .avg("salary as average")
                  .where({ gender });
            
                return result[0].average;
              };
                avgSalary("male")
                .then(result => {
                  console.log(result)
                  console.log("média salariaaal")
                })
                .catch(err => {
                  console.log(err)
                });

                


///erro de conexão

                const getActorById = async (id: string): Promise<any> => {
                    const result = await connection.raw(
                    `SELECT * FROM Actor WHERE id = ${id}`
                     );
                    return result[0][0];
                  };
                  
                  app.get("/actor/:id", async (req: Request, res: Response) => {
                    try {
                      const id = req.params.id;
                      const actor = await getActorById(id);
                      res.status(200).send(actor);
                    } catch (err:any) {
                      res.status(500).send({
                        message: err.message,
                      });
                    }
                  });


     
                const getActorByGender = async (gender: string): Promise<any> => {
                    const result = await connection.raw(`
                    SELECT Count(*) FROM Actor WHERE gender = '${gender}'`
                     );
                    return result[0][0];
                  };
                
                  app.get("/actor", async (req: Request, res: Response) => {
                    try {
                
                      const actor = await getActorByGender("female");
                      res.status(200).send(actor);
                    } catch (err:any) {
                      res.status(500).send({
                        message: err.message,
                      });
                    }
                  });


const createActor = async (id: string, name:string, salary: string, birth_date: Date, gender: string) => {
        const novoAtor  = await 
            connection("Actor").insert({id, name, salary, birth_date, gender})
      };

                  app.put("/actor", async (req: Request, res: Response) => {
                    try {
                      await createActor(
                        req.body.id,
                        req.body.name,
                        req.body.salary,
                        new Date(req.body.dateOfBirth),
                        req.body.salary
                      );
                  
                      res.status(200).send();
                    } catch (err:any) {
                      res.status(400).send({
                        message: err.message,
                      });
                    }
                  });


                  
const updateSalary = async (id: string, salary: string) => {
    const novoAtor  = await 
        connection("Actor").insert({id,  salary})
  };

  app.post("/actor", async (req: Request, res: Response) => {
    try {
      await updateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });



                    
// const deleteActor = async (id: string) => Promise<any>{
//     const result = await connection("Actor")
//     .delete()
//     .where("id", id);
// }; 


  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });