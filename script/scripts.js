//jogo de dados, utilizando lista e biblioteca Math
const jogadorDado = document.querySelector('#somaJogador')
const iaDado = document.querySelector('#somaIa')
const btSorteio = document.querySelector('button')

img1 = document.querySelector('#dadoj1')
img2 = document.querySelector('#dadoj2')
img3 = document.querySelector('#dadoj3')


const lado = [
    {
        dado:{
        url: '/imagen/um.png',
        lados: 1
        }
    },
    {
        dado:{
        url: '/imagen/dois.png',
        lados: 2
        }
    },
    {
        dado:{
            url: '/imagen/tres.png',
            lados: 3
        }
    },
    {
        dado:{
            url: '/imagen/quatro.png',
            lados: 4
        }
    },
    {
        dado:{
            url: '/imagen/cinco.png',
            lados: 5
        }
    },
    {
        dado:{
            url: '/imagen/seis.png',
            lados: 6
        }
    }
]

btSorteio.addEventListener('click', roletarDados)
const listaJogador = []
const listaComputador = []

function roletarDados(){
    let sorteio = []
    let numsorteio = 0
    let jogadorSoma = 0
    let IaSoma = 0

    for(let i=0; i<3; i ++){   
        numsorteio = Math.floor(Math.random()*6) + 1
        sorteio.push(numsorteio)
        jogadorSoma += numsorteio
        //console.log(sorteio)

        IaSoma += Math.floor(Math.random()*6) + 1
    }
    vencedor(jogadorSoma, IaSoma)
    mostrarNaTela(sorteio)
}

function mostrarNaTela(sorteio){
        lado.filter(item =>{
            if(4 == item.dado.lados){
                console.log(sorteio)
            }
        })   
}

function vencedor(jogadorSoma, IaSoma){
    if(jogadorSoma > IaSoma){
        jogadorDado.textContent = `${jogadorSoma}`
        iaDado.textContent = `${IaSoma}`
    }else
    if(jogadorSoma == IaSoma){
        console.log(`${jogadorSoma} EMPATE ${IaSoma}`)
    }else{
        jogadorDado.textContent = `${jogadorSoma}`
        iaDado.textContent = `${IaSoma}`
    }
}