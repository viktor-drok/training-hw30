let input3 = document.querySelector('.input3')
let output3 = document.querySelector('.output3')
let yourDiscount = document.querySelector('.yourDiscount')

input3.oninput = () => {
    let forPay = document.querySelector('.forPay')
    let totalPay = document.querySelector('.totalPay')

    if (input3.value < 200) {
        forPay.innerHTML = input3.value * 0
        yourDiscount.innerText = `your discount 0%`
    }
    else if (200 <= input3.value && input3.value <= 300) {
        forPay.innerHTML = ` your discount ${(input3.value / 100 * 3).toFixed(2)} hrn`
        totalPay.innerText = input3.value - (input3.value / 100 * 3).toFixed(2) + ' hrn'

        yourDiscount.innerText = 'your discount 3%'
    }
    else if (300 < input3.value && input3.value < 500) {
        forPay.innerHTML = ` your discount ${(input3.value / 100 * 5).toFixed(2)} hrn`
        totalPay.innerText = input3.value - (input3.value / 100 * 5).toFixed(2) + ' hrn'

        yourDiscount.innerText = 'your discount 5%'
    }
    else if (500 <= input3.value) {
        forPay.innerHTML = ` your discount ${(input3.value / 100 * 7).toFixed(2)} hrn`
        totalPay.innerText = input3.value - (input3.value / 100 * 7).toFixed(2) + ' hrn'

        yourDiscount.innerText = 'your discount 7%'
    }
}