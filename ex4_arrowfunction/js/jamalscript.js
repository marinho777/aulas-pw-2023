function add(){
    let input = document.getElementById("lista")
    let uicontent = document.getElementById("ul")
    let content = document.createElement("li")
    content.innerHTML = input.value
    uicontent.appendChild(content)
}

var numeros = [3, 9, 77, 91, 113, 155, 177, 199, 255, 765, 2, 8, 10, 36, 56, 88, 98, 138, 864, 1056]
var result = []

numeros.map((x) => {
    let y = x%2
    if(y === 0){
        result.push(x)
    }
})
console.log(result)