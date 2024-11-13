document.body.style.backgroundColor = "Pink"
document.title = "Socorro Dom"
document.documentElement.lang = "pt-br"
//crição de elementos
let campoNovo = document.createElement('button')

//inserir estilo dentro do HTML
campoNovo.style.backgroundColor = "white"
campoNovo.style.borderRadius = "5px"

//informar em qual elemento queremos inserir o botão
document.body.appendChild(campoNovo).innerHTML = 'Enviar'
