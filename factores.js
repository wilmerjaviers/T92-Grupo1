
function factoresPrimos(n) {
    let factores = [];
    let divisor = 2;
    while (n > 1) {
        while (n % divisor === 0) {
            factores.push(divisor);
            n /= divisor;
        }
        divisor++;
    }
    return factores;
}


let numero = 25;
console.log(`Factores primos de ${numero}:`, factoresPrimos(numero));
