interface CartoonCharacter {
   [index: string]: string | Number | undefined;
}

const homer: CartoonCharacter = {
   name: "",
   age: 65,
   cartoon: ""
}

homer.phrase = "frase do homer";
console.log(homer["phrase"]);

// homer.propNaoExistente;


// console.log(homer);