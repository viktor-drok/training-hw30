// Напиши функцію, яка приймає 2 числа і повертає:
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function numbers(num1, num2) {
    if (num1 < num2) {
        return -1
    } else if (num1 > num2) {
        return 1
    } else if (num1 === num2) {
        return 0
    }
}
console.log(numbers(135, 124))
