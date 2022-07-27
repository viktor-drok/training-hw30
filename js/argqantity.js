// Створи функцію, яка буде виводити кількість переданих їй аргументів.
const input5 = document.querySelector('.input5')
const output5 = document.querySelector('.output5')
const outputNums = document.querySelector('.outputNums')
const button5 = document.querySelector('.button5')
const clear = document.querySelector('.buttonClear')
let inputNumbers = []

button5.onclick = addArrNum

clear.onclick = () => {
    inputNumbers.pop()
    output5.innerHTML = inputNumbers.length
    outputNums.innerHTML = inputNumbers
    console.log(inputNumbers.length)
    console.log(inputNumbers)
}

// input5.oninput = addArrNum // спитати про ігнор видалення і чи можна ввід даних черех ЕНТЕР

function addArrNum() {
    inputNumbers.push(input5.value)
    outputNums.innerHTML = inputNumbers
    output5.innerHTML = inputNumbers.length
    console.log(inputNumbers.length)
    console.log(inputNumbers)
}
