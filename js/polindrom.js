const output2 = document.querySelector('.output2')
const input2 = document.querySelector('.input2')

input2.oninput = reversText
function reversText() {
    let inputText = input2.value.split('').reverse('').join('')
    output2.innerText = inputText
    let ifPolindrom = document.querySelector('.ifPolindrom')

    if (output2.innerText === input2.value) {
        ifPolindrom.innerText = 'polindrom'
    }
    else
        ifPolindrom.innerText = 'NOT polindrom'
}
