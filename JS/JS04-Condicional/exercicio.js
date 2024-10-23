
peso = 700;

altura = 1.90;

imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu IMC é: ${imc.toFixed(2)} e você está abaixo do peso.`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é: ${imc.toFixed(1)} e seu peso está normal`);
} else {
    console.log(`Seu IMC é: ${imc.toFixed(1)} e você está acima do peso.`);
}
