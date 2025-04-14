function calc(operator, ...numbers) {
    if (operator === '+') {
        return numbers.reduce((a,b) => a + b,0)
    } else if (operator === '-') {
        return numbers.reduce((a,b) => a - b)
    } else if (operator === '*') {
        return numbers.reduce((a,b) => a * b)
    } else if (operator === '/') {
        return numbers.reduce((a,b) => a / b)
    }
     return numbers + numbers
}