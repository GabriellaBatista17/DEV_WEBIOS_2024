// let frutas = [ "morango", "banana", "melancia", "lichia", "limão", "abacaxi"," melão", "maçã"]

// frutas.forEach((valor, indice) => {
//         console.log(valor);
//     console.log(indice);
// })

// frutas.forEach(Percorrer)
// //                 conteudo  local
// function Percorrer(valor, indice){
//     console.log(valor);
//     console.log(indice);
// }

// for(i= 0; i <= frutas.length ; i++){
// console.log(frutas[i]); // conteudo/valor da posição
// console.log(i); //numero da posição
// }
console.clear

//Math.currently e Math.max (maior numero) / Math.min (menor numero) / Math.sqrt (raiz quadrada)
let numeros = [ 6, 1, 2, 3, 4, 5]
//Trazer um novo array atualizado com a raiz quadrada de cada número do array
let numerosDois = numeros.map(Math.sqrt)
let maiorNumero = Math.max.apply(Math, numeros)
let menorNumero = Math.min.apply(Math, numeros)

console.log(maiorNumero + " " + menorNumero );

// console.log(numerosDois);
// console.log(maiorNumero);

let filtraNumero = numeros.filter((valor) => {
    return valor >=3;
})
//criando um novo array onde ira conter apenas numeros maior ou igual 3
console.log(numeros);
console.log(filtraNumero);


console.clear()

//trabalhando com array de obj

let tarefa = [
    {
        tarefa:"Dormir",
        isFeita: true
    },
    {
        tarefa: "limpar",
        isFeita: false
    },
    {
        tarefa: "torcer",
        isFeita: true
    }
]

//retorne apenas as tarefas que estão marcadas true  (FIND)

 let retornaTrue = tarefa.filter((item) => {
return item.isFeita == true;
})

console.log(retornaTrue);