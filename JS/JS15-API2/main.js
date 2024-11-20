let URL = "https://viacep.com.br/ws/01001000/json/"


async function BuscaCep() {
    await fetch(URL).then((response) => {
        //transformar json em obj
        return response.json();
    }).then((response) => {
        document.getElementById('cep').value = response.cep
        document.getElementById('logradouro').value = response.logradouro
        document.getElementById('complemento').value = response.complemento
        document.getElementById('bairro').value = response.bairro
        document.getElementById('estado').value = response.estado
    })





}

BuscaCep();
