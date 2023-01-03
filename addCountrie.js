import { countries } from "./countries.js";

//Um script que adiciona um pais a lista de paises

const name = process.argv[2]
const code = process.argv[3]

console.log(name)
console.log(code)

if(!name || !code){
    console.log("Faltou nome ou código do pais");
} else {
    const newCountrie = {
        name,
        code
    }
    countries.push(newCountrie)

    console.log(countries[countries.length - 1])
}