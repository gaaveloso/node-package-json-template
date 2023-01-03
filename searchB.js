import { countries } from "./countries.js";

//Script que retorna todos os paises que começam com a letra B
const busca = process.argv[2];

if (!busca) {
  console.log("Faltou argumento de busca");
} else {
  const resultado = countries.filter(
    (countrie) => countrie.name.toLowerCase()[0] === busca.toLowerCase()
  );
  console.log(resultado);
}
