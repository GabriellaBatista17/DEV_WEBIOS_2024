let URL = 'https://dog.ceo/api/breeds/image/random'

const  DogApi = async () => {
    //faça a consulta na API e roterne o JSON na variavel resp
  let resp = await fetch(URL)
 

//pegar o retorne em JSON e transformar ele em obj
 let exemplo = resp.json()
  console.log(exemplo);
}

DogApi();
