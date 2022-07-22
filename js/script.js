const symbols = ')!@#$%^&*('
console.log(symbols)

let nameList = symbols.split('', 10);
console.log(nameList);

const input = document.querySelector('.input')
const output = document.querySelector('.output')

input.oninput = function () {
    output.innerText = symbols[input.value]
}
