// //array de objs

// //retornar o objeto
// console.log(aluno);

// //retornar apenas o nome
// console.log(`O nome do aluno é ${aluno.nome}`);

// //apenas o campo isChora
// console.log(`O aluno ${aluno.nome} chora demais? R: ${aluno.isChora}`);

// //retornar apenas a nota
// console.log(aluno.notas[2]);

// console.clear()

// let IOS = [{
//     nome: 'Gabriella',
//    idade: 19,
//    altura: 1.63,
//    isCracha: true,
//    isCamisa: false,
//    isPaciencia: true,
//    isChora: true,
//    cor: 'bege',
//    notas: [10, 8, 9, 7, 10]
// },
// {
//     nome: 'Jeferson',
//    idade: 19,
//    altura: 1.70,
//    isCracha: true,
//    isCamisa: false,
//    isPaciencia: true,
//    isChora: true,
//    cor: 'branco',
//    notas: [10, 8, 9, 7, 10]
// },
// {
//     nome: 'Sabrina',
//     idade: 22,
//     altura: 1.69,
//     isCracha: true,
//     isCamisa: true,
//     isPaciencia: true,
//     isChora: true,
//     cor: 'bege',
//     notas: [10, 8, 9, 7, 10]
// }
// ]

// //mostrar obj por completo
// console.log(IOS);

// //obj Jeferson
// console.log(IOS[1]);

// //RETORNAR APENAS  variavel isCamisa do obj jeferson
// console.log(IOS[1].isCamisa, IOS[1].isCracha, IOS[2].isPaciencia);

// for(i = 0; i < IOS.length; i++){
//     let login = IOS[i]
//     if(login.isCracha == true){
//         console.log("O aluno tem cracha");
//         console.log(login.isCracha);
//     }else{
//         console.log("Aluno não tem cracha");
//     }
// }
console.clear()

let aluno = {
    nome: 'Gabriella',
    idade: 19,
    altura: 1.63,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'bege',
    notas: [10, 8, 9, 7, 10]
 }

 //transformar o obj em json
 console.log(aluno);
// r
 console.log(JSON.stringify(aluno));

 let Jsonito = '{"nome":"Gabriella","idade":19,"altura":1.63,"isCracha":true,"isCamisa":false,"isPaciencia":true,"isChora":true,"cor":"bege","notas":[10,8,9,7,10]}'
//json e obj
 console.log(JSON.parse(Jsonito));