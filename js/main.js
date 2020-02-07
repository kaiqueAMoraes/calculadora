let tela = document.getElementById("textNode")

botao0.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "0")
}
botao1.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "1")
}
botao2.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "2")
}
botao3.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "3")
}
botao4.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "4")
}
botao5.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "5")
}
botao6.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "6")
}
botao7.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "7")
}
botao8.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "8")
}
botao9.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "9")
}
soma.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "+")
}
multiplicacao.onclick = (event) => {
    let numerosClicados = tela.value
    tela.value = (numerosClicados + "*")
}

igual.onclick = (event) => {
    tela.value = eval(tela.value)
    console.log(tela.value)
}

limpar.onclick = () => {
    tela.value = ""
}