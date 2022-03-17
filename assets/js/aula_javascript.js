// let funcionarios = []


// const andre = {
//   idade: 35,
//   guitarra: true,
//   baixo: false,
//   cidade: "Fortaleza"
// }

// const bruce = {
//   idade: 63,
//   guitarra: false,
//   singer: true,
//   cidade: "London"
// }

// funcionarios.push(andre)
// funcionarios.push(bruce)

// console.log(funcionarios)

// funcionarios.pop(bruce)

// let numero = 2
// let number = 5

// numero += number

// console.log(numero)

// function verificarIdade(idade) {
//   if(idade >= 18) {
//     console.log("Atingiu a maioridade")
//   } else {
//     console.log("Não atingiu a maioridade")
//   }
// }

// verificarIdade()

// function soma(num1, num2, num3) {
//  console.log( num1 + num2 + num3)
// }

// soma(45, 89, 45)

// function divisao(num1, num2) {
//   return num1/num2

// }

// let resultado = divisao(10, 2)

// console.log(resultado)

// let divPessoa = document.querySelector('.pessoa')

// let filaAtendimento = [
//   'André',
//   'Juliete',
//   'Miyagi',
//   'Allana',
//   'Jonas',
//   'Nayara'
// ]
// for (let i = 0; i < filaAtendimento.length; i++) {
//   let div = document.createElement('div')
//   div.innerText = filaAtendimento[i]
//   divPessoa.appendChild(div)
//   console.log(div)
// }


//appendChild ---> Adicionar elementos JS ao documento HTML


// EXEMPLO DE COMO MUDAR O CONTEÚDO DE UM BOTÃO
// const buttonExtrato = document.querySelector("#btnExtrato")
// buttonExtrato.innerText = "André"
// console.log(buttonExtrato)

// const extratoButton = document.querySelector(".btnExtrato")
// extratoButton.style.background = "skyblue"
// extratoButton.style.color = "#fff"
// console.log(extratoButton) 

// const lis = document.querySelectorAll("ul li")
// console.log(lis)


// CRIANDO ELEMENTOS NO JS

// const div = document.querySelector(".divButton")
// const tagbutton = document.createElement("button")
// console.log(tagbutton)
// tagbutton.innerText = "Extrato 2"

// div.appendChild(tagbutton)

// const ulList = document.querySelector(".listaNomes")
// const list = document.createElement("li")
// console.log(list)
// list.innerText = "André"

// ulList.appendChild(list)

// CRIANDO ELEMENTOS, JOGANDO NO HTML, ADICIONANDO ITENS AO ARRAY
// let ironMaiden = {
//   vocal: "Bruce",
//   guitar1: "Dave", 
//   guitar2: "Adrian",
//   guitar3: "Janick",
//   bass: "Steve",
//   drums: "Nicko"
// }

// let filaAtendimento = ['André','Juliete','Miyagi','Allana','Jonas','Nayara' ]

// let andreIsGuitarrist = true

// filaAtendimento.push("João", "Maria", 35, "ironMaiden", "andreIsGuitarrist")

// console.log(filaAtendimento[10])

// for(let i = 0; i < filaAtendimento.length; i++) {
// const liNome = document.createElement("li")
// liNome.innerText = filaAtendimento[i]
// let ulList = document.querySelector(".listaNomes")

// ulList.appendChild(liNome)

// console.log(liNome)


//  }

//  console.log(typeof filaAtendimento[8])


// --------------------------- EVENTOS---------------------------
//  1 SELECIONAR O INPUT
 // a) PEGAR O VALOR NO CAMPO
 //
 // 2 ADICIONAR UM EVENTO NO BOTÃO/CLIQUE
 // 3 GUARDAR O VALOR EM ALGUM LUGAR 
 // 4 SELECIONAR A LISTA
 // 5 CRIAR UM LI (ITEM DA LISTA)
 // 6 ALIMENTAR COM O VALOR DO INPUT
 // 7 JOGAR ELE PRA DENTRO DA LISTA


 
 //SELECIONANDO BUTTON DO HTML
 const btnAdicionar = document.querySelector(".btnAdicionar")

 //SELECIONANDO A LISTA DE NOMES
 const ol = document.querySelector("ol")

 //iINTERCEPTANDO EVENTO NO BUTTON
 btnAdicionar.addEventListener("click", pegarValores)
 //FUNÇÃO QUE VAI EXECUTAR
  function pegarValores(event){
    console.log(event)
    //SELECIONANDO INPUT
 const inputTexto = document.querySelector(".inputText")
 //PEGANDO O VALOR DO INPUT
 const valorInput = inputTexto.value

 //CRIANDO LI PARA ALIMENTAR A LISTA
const li = document.createElement("li")

//ALIMENTAR LI COM O VALOR DO CAMPO
li.innerText = valorInput

//ADICIONANDO O LI COM AS INFORMALÇÕES NA LISTA
ol.appendChild(li)

  }
 //ELEMENTO QUE VOCÊ QUER ESCUTAR
 //TIPO DE EVENTO NESSE CASO O CLIQUE
 //O QUE QUER QUE ELE FAÇA



