let valores = []
function adicionar() {
  let aviso = document.getElementById("aviso");
  let n = document.getElementById("txtnum");
  let lista = document.getElementById('lista')
  if (n.value.length == 0) {
    window.alert("Digite um número para adicionar-lo")
  } else{
    valores.push(Number(n.value))
    let item = document.createElement('option')
    item.text = `${n.value}`
    lista.appendChild(item)
    res.innerHTML = ``;
  }
  n.value = ""; //serve para 'apagar' a caixa de texto do input
  n.focus(); //para ficar 'focado' (selecionado) na caixa de texto do input
}

function soma() {
    res.innerHTML = ''
    if (valores.length == 0) {
        window.alert("Digite algum valor para fazer uma operação!")
    } else{
        let soma = 0
    for ( let pos in valores) {
        soma += valores[pos]
        res.innerHTML += ` > ${soma}`
    }
    res.innerHTML += `<br>A soma dos valores foi de ${soma}`
    }
    
}

function subt() {
    res.innerHTML = ''
    if (valores.length == 0) {
        window.alert("Digite algum valor para fazer uma operação!")
    } else{
        let subt = valores[0] * 2
    for ( let pos in valores) {
        subt -= valores[pos]
        res.innerHTML += ` > ${subt}`
    }
    res.innerHTML += `<br>A subtração dos valores foi de ${subt}`
    }
}

function mult() {
    res.innerHTML = ''
    if (valores.length == 0) {
        window.alert("Digite algum valor para fazer uma operação!")
    } else{
        let mult = 1
    for ( let pos in valores) {
        mult *= valores[pos]
        res.innerHTML += ` > ${mult}`
    }
    res.innerHTML += `<br>A multipicação dos valores foi de ${mult}`
    }
}

function divi() {
    res.innerHTML = ''
    if (valores.length == 0) {
        window.alert("Digite algum valor para fazer uma operação!")
    } else{
        let divisao = valores[0] * valores[0]
    for ( let pos in valores) {
        divisao /= valores[pos]
        res.innerHTML += ` > ${divisao}`
    }
    res.innerHTML += `<br>A divisão dos valores foi de aproximadamente ${divisao.toFixed(2)}`
    }
}

function reset() {
    lista.innerHTML = ``
    res.innerHTML = ``
    valores = []
}