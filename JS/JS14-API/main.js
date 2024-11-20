let URL = 'https://dog.ceo/api/breeds/image/random'

const  DogApi = async () => {
    //faça a consulta na API e roterne o JSON na variavel resp
await fetch(URL).then((response) => {
  //transformar o json recebido pelo FETCH em obg
  return response.json();
}).then((response) => {
  //apresentar as informções para o usuario
  //transformando novamente json em obj
  document.getElementById('mostrarJSON').innerText = JSON.stringify(response);

  let image = `
       <img style=" width: 300px; height:200px" src="${response.message}" alt="">
  `
  document.getElementById('mostraIMG').innerHTML = image;
})
 

//pegar o retorne em JSON e transformar ele em obj
 let exemplo = resp.json()
  console.log(exemplo);
}

DogApi();
