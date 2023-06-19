//jogo de dados, utilizando lista e biblioteca Math
const jogadorDado = document.querySelector('#somaJogador')
const iaDado = document.querySelector('#somaIa')
const btSorteio = document.querySelector('button')

btSorteio.addEventListener('click', roletarDados)

function roletarDados(){
    let jogadorSoma = 0
    let IaSoma = 0
    for(let i=0; i<3; i ++){   
        jogadorSoma += Math.floor(Math.random()*6) + 1
        IaSoma += Math.floor(Math.random()*6) + 1
    }
    vencedor(jogadorSoma, IaSoma)
}
function vencedor(jogadorSoma, IaSoma){
    if(jogadorSoma > IaSoma){
        jogadorDado.textContent = `${jogadorSoma}`
        iaDado.textContent = `${IaSoma}`
    }else
    if(jogadorSoma == IaSoma){
        console.log(`Jogador soma: ${jogadorSoma} = ${IaSoma}/ Empate`)
    }else{
        jogadorDado.textContent = `${jogadorSoma}`
        iaDado.textContent = `${IaSoma}`
    }
}