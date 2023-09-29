function add(){
    let input = document.getElementById("lista")
    let uicontent = document.getElementById("ul")
    let content = document.createElement("li")
    content.innerHTML = input.value
    uicontent.appendChild(content)
}