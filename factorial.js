function factorial(n) {
    if (n < 0) {
        console.log("No existe factorial de un número negativo");
        return;
    }

    let resultado = 1;
    let proceso = "";

    for (let i = n; i > 0; i--) {
        resultado *= i;
        proceso += (i !== 1) ? `${i} × ` : `${i}`;
    }

    console.log(`Factorial(${n}) = ${proceso} = ${resultado}`);
}

factorial(3);