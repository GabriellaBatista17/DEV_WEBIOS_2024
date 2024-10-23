// let media, faltas;
// media = 10
// faltas = 4
// // 6.5
// if (media >= 7 && faltas <= 5){
//     console.log(`Aluno Aprovado.`);
// } else if (media >= 6.5 && faltas <= 5) {
//     console.log(`Aluno Ap. Conselho.`);
// } else {
//     console.log(`Aluno Reprovado.`);
// }
// console.log(`Fim.`);

let valor = 2
switch (valor) {
    case 1:
        console.log(`Você foi avaliado com ótimo`);
        break;
    case 2:
        console.log(`Você foi avaliado com Bom`);
        break;
    case 3:
        console.log(`Você foi avaliado com Regular`);
        break;
    case 4:
        console.log(`Você foi avaliado com Ruim`);
        break;
    case 5:
        console.log(`Você foi avaliado com Péssimo.`);
        break;
    default:
        console.log(`Você não foi avaliado!`);
        break;
}