class Aluno {
    constructor( nome, ano, altura, isCracha, isCamisa, cor){
     this.nome = nome; 
    this.ano = ano;
    this.altura = altura;
    this.isCracha = isCracha;
    this.isCamisa = isCamisa;
    this.cor = cor;
    }
    retornaIdade(){
        
    }
}
// Intancias == copias
let aluno1 =  new Aluno("Gabriella", 2005, 1.63, true, true, "papelão molhado")

let aluno2 = new Aluno ("Jeferson", 2005, 1.75, true, true, "Cor de papel")

console.log(aluno1.nome, aluno1.cor);
console.log(aluno2.nome, aluno2.cor);

