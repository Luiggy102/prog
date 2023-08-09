function factorialNúmero(número) {
    var total = 1;
    for (var i = 1; i <= número; i++) {
        total = total * i;
    }
    return total;
}
function factorialConLímite(número, limite) {
    var total = número;
    for (var i = 1; i <= número; i++) {
        total = total * (número - i);
        if (i === (número - limite))
            break;
    }
    return total;
}
function permutar(elementos, permutaciones) {
    var limitePermutación = elementos - permutaciones + 1;
    return factorialConLímite(elementos, limitePermutación);
}
console.log(permutar(13, 9));
