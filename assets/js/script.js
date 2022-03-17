//ADICIONAR IDS NOS BOTÕES
//1...4
//2 SELECIONAR OS BOTÕES
//3 INTERCEPTAR O EVENTO DE CLIQUE
//4 RECUPERAR O ID ADICIONADO

//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", identificarOpcoes)
//EXECUTANDO AÇÃO DEPOIS DO CLIQUE
function identificarOpcoes(event) {

  //IDENTIFICANDO ONDE OCORREU O CLIQUE
  const elemento = event.target 
  //VERIFICANDO SE É UM LI
  if(elemento.tagName == "LI") {
    //RECUPERANDO O ID
    const id = elemento.id
    
    // SELECIONANDO UMA SEÇÃO ULTILIZANDO UM ID (ESCOLHA DO USUÁRIO)
   const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)
   

  //  REMOVENDO CLASSE 
  removeClasseMostrar()
   //ADICIONAR UMA CLASSE
   secaoEscolha.classList.add("mostrar")
  }
}


//FUNÇÃO PARA REMOVER A CLASSE DAS DIVS
function removeClasseMostrar() {
  const divs = document.querySelectorAll(".secaoTransacao .container div")
  for(let i = 0; i < divs.length; i++){
   divs[i].classList.remove("mostrar")
  }


}