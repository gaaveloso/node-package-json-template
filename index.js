import { countries } from "./countries.js";

// console.log(countries);

const busca = process.argv[2];

console.log(busca);

//Puxar um pais da lista de array
if (!busca) {
  console.log("Faltou o argumento de busca");
} else {
  const resultado = countries.filter((countrie) => {
    return countrie.name.toLowerCase().includes(busca.toLowerCase());
  });

  //Verificação se o pais está na lista de array
  if (resultado.length === 0) {
    console.log("Pais não encontrado");
  } else {
    console.log(resultado);
  }
}
