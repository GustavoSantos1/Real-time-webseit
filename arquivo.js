let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//função de adição de valores ao select
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `O valor ${num.value} foi adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

//fução de calculo e validação dos valores adicionados ao select
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores para finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        //for para analisar os valores maiores e menores
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        // exibição dos resultados na tela do usuário
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} elementos.<p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.<p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.<p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.<p>`
        res.innerHTML += `<p>A media dos valores é ${media}.<p>`
    }
}