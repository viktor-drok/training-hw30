let numInput = document.querySelector('.input4')
let numOutput = document.querySelector('.output4')

numInput.oninput = factorial
function factorial(number) {
    let num = 1
    for (let i = 1; i <= numInput.value; i++) {
        num = num * i
    }
    numOutput.innerHTML = num
    return num
    console.log(factorial())
}
