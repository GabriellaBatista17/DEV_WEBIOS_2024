class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }
    contaPoupança() {
        this.salario -= this.salario * 0.015;
        return this.salario
    }
    contaCorrente() {
        this.salario -= this.salario * 0.036;
        return this.salario
    }
    contaEstudante() {
        this.salario -= this.salario * 0.012;
        return this.salario
    }
    imprimirDados() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Salário: ${this.salario}, Sexo: ${this.sexo}, Agência: ${this.agencia}, Conta: ${this.conta}, Número da Conta: ${this.numeroConta}`)
    }
}
var conta1 = new ContaBancaria('Jeferson', 19, 2500, 'Masculino', '589', 'Poupança', '785961')
conta1.contaPoupança();
conta1.imprimirDados();

var conta2 = new ContaBancaria('Sabrina', 20, 5000, 'Feminino', '123', 'Corrente', '124847')
conta2.contaCorrente();
conta2.imprimirDados();

var conta3 = new ContaBancaria('Manasses', 50, 500, 'Masculino', '273', 'Estudante', '345678')
conta3.contaEstudante();
conta3.imprimirDados();