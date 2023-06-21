//jogo de dados, utilizando lista e biblioteca Math
const jogadorDado = document.querySelector('#somaJogador')
const iaDado = document.querySelector('#somaIa')
const btSorteio = document.querySelector('button')
const dadosJogador = document.querySelector('#dados-jogador')
const dadosComputador = document.querySelector('#dados-computador')
const resulJogador = document.querySelector('#result-jogador')
const resulComputador = document.querySelector('#result-computador')
const vencedorJ = document.querySelector('#jogador-status')
const vencedorC = document.querySelector('#computador-status')

const listaDados = [
        {
            lado: 1,
            url: '/imagen/um.png'
        },
        {
            lado: 2,
            url: '/imagen/dois.png'
        },
        {
            lado: 3,
            url: '/imagen/tres.png'
        },
        {
            lado: 4,
            url: '/imagen/quatro.png'
        },
        {
            lado: 5,
            url: '/imagen/cinco.png'
        },
        {
            lado: 6,
            url: '/imagen/seis.png'
        }
]

btSorteio.addEventListener('click', roletarDados)

function roletarDados(){
    const sorteioJogador = []
    const sorteioComputador = []
    let numsorteio = 0

    for(let i=0; i<3; i ++){   
        sorteioJogador.push(Math.floor(Math.random()*6) + 1)   
        sorteioComputador.push(Math.floor(Math.random()*6) + 1)   
    }

    vencedorSoma(sorteioJogador, sorteioComputador)
    mostrarDadoTela(sorteioJogador, sorteioComputador)
}

function mostrarDadoTela(sorteioJogador, sorteioComputador){
    dadosJogador.innerHTML = ''
    dadosComputador.innerHTML = ''

    for(let i=0; i< sorteioJogador.length; i++){
        let numj = sorteioJogador[i]

        let dado = listaDados.find(item => item.lado === numj)

        if(dado){
            let img = document.createElement('img')
            img.setAttribute('class', 'lado-img')
            img.src = `${dado.url}`
            dadosJogador.append(img)
        }     
    }  

    for(let i=0; i< sorteioComputador.length; i++){
        let numc = sorteioComputador[i]

        let dado = listaDados.find(item => item.lado === numc)

        if(dado){
            let img = document.createElement('img')
            img.setAttribute('class', 'lado-img')
            img.src = `${dado.url}`
            dadosComputador.append(img)
        }     
    }
}

function vencedorSoma(sorteioJogador, sorteioComputador){
    let jogadorSoma = sorteioJogador.reduce((item, value) =>{
        return item + value
    })

    let IaSoma = sorteioComputador.reduce((item, value) =>{
        return item+value
    })

    vencedor(jogadorSoma, IaSoma)
}

function vencedor(jogadorSoma, IaSoma){   
    
    if(jogadorSoma > IaSoma){
        jogadorDado.textContent = `${jogadorSoma}`
        iaDado.textContent = `${IaSoma}`
        vencedorJ.textContent = 'Venceu!'
        vencedorC.textContent = ''
    }else
    if(jogadorSoma == IaSoma){
        jogadorDado.textContent = `${jogadorSoma}`
        iaDado.textContent = `${IaSoma}`

        vencedorJ.textContent = 'Empate!'
        vencedorC.textContent = 'Empate'

    }else{
        jogadorDado.textContent = `${jogadorSoma}`
        iaDado.textContent = `${IaSoma}`

        vencedorJ.textContent = ''
        vencedorC.textContent = 'Venceu'
    }
}