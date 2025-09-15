let demoElement = document.getElementById('demo-element');
let outputText = document.getElementById('output-text')
function changeContent() {
    //changer le texte de «demo-element» par
    //Contenu modifié <strong>Ceci en gras</strong> ajouter dynamiquement.
    //Element modifié affiché dans «output-text»
    demoElement.innerHTML = "<strong>Ceci en gras</strong>";
    outputText.textContent = "Element modifié affiché "
}

function changeColor() {
    //changer la couleur de «demo-element»
    const colors = ['#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', '#ff9ff3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // affecter une couleur aléatoire ... = randomColor;
    demoElement.style.color = randomColor;

    document.getElementById('output-text').textContent = `Background color changed to ${randomColor}`;
}

function addItem() {
    const domExample = document.querySelector('.dom-example');
    const newItem = document.createElement('div');
    newItem.className = 'list-item';
    newItem.textContent = `List item ${Math.floor(Math.random() * 100)}`;
    domExample.appendChild(newItem);
    document.getElementById('output-text').textContent = 'New list item added!';
}

function removeItem() {
    const items = document.querySelectorAll('.list-item');
    if (items.length > 0) {
        items[items.length - 1].remove();
        document.getElementById('output-text').textContent = 'Last list item removed!';
    } else {
        document.getElementById('output-text').textContent = 'No items to remove!';
    }
}

let calcResultat = document.getElementById('calc-result');
// Calculator Function
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                calcResultat.textContent = 'Erreur : Division par zéro impossible !';
                calcResultat.textContent = 'error';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 'Opération invalide';
            calcResultat.textContent = 'error';
            return;
    }
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('calc-result').textContent = 'Please enter valid numbers!';
        return;
    }

    calcResultat.textContent = `Result: ${result}`;
}


