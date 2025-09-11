let header = document.getElementsByTagName('header')
let titre = document.getElementById('titre')
let h2 = document.getElementsByClassName('h2')

let tabP = document.querySelectorAll('p')
console.log(tabP[0])

tabP[0].textContent ="Introduction"
tabP[2].innerHTML = "<strong>Conclusion</strong>"
tabP[0].style.fontSize = "20px"

let div = document.createElement('div')
div.textContent = "Ceci est un nouveau div"
document.body.appendChild(div)
