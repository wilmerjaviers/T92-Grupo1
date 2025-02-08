function verificaciondeNumerosPrimos (n) {
    let factor = [];
    let divisor = 2;

    while (n > 1){
        while (n % divisor === 0 ){
            factor.push(divisor);
            n /= divisor;
        }
        divisor++;
    }
    return factor;

}

let numero = 60;
console.log(`Factores primos de ${numero} son: `, verificaciondeNumerosPrimos(numero));
