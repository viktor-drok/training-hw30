const output2 = document.querySelector('.output2')
const input2 = document.querySelector('.input2')

input2.oninput = reversText
function reversText() {
    let inputText = input2.value.split('').reverse('').join('')
    output2.innerText = inputText
    let ifPalindrom = document.querySelector('.ifPalindrom')

    if (output2.innerText === input2.value) {
        ifPalindrom.innerText = 'palindrom'
    }
    else
        ifPalindrom.innerText = 'NOT palindrom'
}
