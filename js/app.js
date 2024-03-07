function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value
    let qtd = parseInt(document.getElementById('qtd').value)
    if (qtd <= 0 || isNaN(qtd)) {
        alert('Por favor, digite uma quantidade válida.')
        return
    }
    if (ingresso == 'pista') {
        comprarPista(qtd)
    } else if (ingresso == 'superior') {
        comprarSuperior(qtd)
    } else if (ingresso == 'inferior') {
        comprarInferior(qtd)
    }
} 

function comprarPista(qtd) {
    qtdPista = document.getElementById('qtd-pista').textContent
    if (qtdPista < qtd) {
        alert('Quantidade de ingressos pista indisponível')
        return
    } else {
        qtdPista = qtdPista - qtd
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso!')
    }

}

function comprarSuperior(qtd) {
    qtdSuperior = document.getElementById('qtd-superior').textContent
    if (qtdSuperior < qtd) {
        alert('Quantidade de ingressos superior indisponível')
        return
    } else {
        qtdSuperior = qtdSuperior - qtd
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra realizada com sucesso!')
    }

}

function comprarInferior(qtd) {
    qtdInferior = document.getElementById('qtd-inferior').textContent
    if (qtdInferior < qtd) {
        alert('Quantidade de ingressos inferior indisponível')
        return
    } else {
        qtdInferior = qtdInferior - qtd
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra realizada com sucesso!')
    }

}

