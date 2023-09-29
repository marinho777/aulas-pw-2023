//var n1 = parseInt(document.getElementById("n1").value)
//var n2 = parseInt(document.getElementById("n2").value)

function somar(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let r = n1+n2
    alert("o resultado e:   " + r)
}
function subtrair(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let r = n1-n2
    alert("o resultado e:   " + r)
}
function dividir(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let r = n1/n2
    alert("o resultado e:   " + r)
}
function multiplicar(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let r = n1*n2
    alert("o resultado e:   " + r)
}
function quadrado(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let r = n1*n1
    let r2 = n2*n2
    alert("o resultado do quadrado de n1:   " + r)
    alert("o resultado do quadrado de n2:   " + r2)
}
function potencia(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let r = Math.pow(n1, n2)
    alert("o resultado e:   " + r)
}
function raiz(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let r = Math.sqrt(n1)
    let r2 = Math.sqrt(n2)
    alert("o resultado da raiz de n1:   " + r)
    alert("o resultado da raiz de n2:   " + r2)
}

