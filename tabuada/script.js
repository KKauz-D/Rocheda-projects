function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por Favor, Digite um número!')    
    } else {
        let n = Number(num.value)
        tab.innerHTML = ``
        for(let c = 1; c<=10; c++) {
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
    txtn.value = ''
    txtn.focus()
    
}