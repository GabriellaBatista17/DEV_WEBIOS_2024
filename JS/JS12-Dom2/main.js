//vamos desenvolver uma tabuada de 1 a 10
//pega o elemento utilizando ID
let valor = document.getElementById('recebeValor')
//pega o elemento utilizando o atributo name 
let resultado = document.getElementById('resultado')
//
const Tabuada = () => {
    //value= guarda o valor que está sendo digitado dentro da variável 
    let guardaValor = valor.value;
    resultado.innerHTML = ''
    resultado.style.color = 'Black'
    if(guardaValor == ''){
        resultado.innerHTML = "Insira um valor valido"
       resultado.style.color = 'Red'
    //  console.log("Digite um valor valido");
    }else{
        resultado.style.color = 'Black'
        for ( i = 0; i <= 10; i++){
            // resultado = guardaValor * i
            // console.log( guardaValor, 'x', i, '=', resultado);       
            console.log( `${guardaValor} x ${i} = ${guardaValor * i}`)
            resultado.innerHTML += `${guardaValor} x ${i} = ${guardaValor * i}<br>`
        }
    }

}
// para limpar os campos
const Limpar = () => {
    resultado.innerHTML = ' ';
    valor.value = ''
}
