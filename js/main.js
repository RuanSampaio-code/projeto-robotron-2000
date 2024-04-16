
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=> {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        //console.log(evento.target.parentNode)

        //nova função que atualiza as estatistics
        atualizaEstatisticas(evento.target.dataset.peca)
    })//console.log(elemento)
})


function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1
    } else {
        
        peca.value = parseInt(peca.value) + 1
    }
}


function atualizaEstatisticas(peca) {
    //console.log(pecas["bracos"])
    //console.log(peca)
    estatisticas.forEach((elemento) => {
        console.log(elemento.textContent)
        console.log(elemento.dataset.estatistica)

        elemento.textContent = parseInt( elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

/* 
let classRobo = document.querySelector('.robotron')

classRobo.addEventListener('click', (evento)=> {

    console.log(evento );
    
});




function clicouRobo(nome) {
    console.log("ola mundo " + nome)   
}

clicouRobo("ruan") 
 */
// Seleciona o elemento pelo ID
//let elemento = document.getElementById('meuElemento');

// Adiciona um ouvinte de evento de clique ao elemento
//elemento.addEventListener('click', function() {
  // Aqui você pode executar ações quando o botão for clicado
//  console.log('O botão foi clicado!')
//});