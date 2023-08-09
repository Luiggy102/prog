function factorialNúmero (número: number):number {
	let total: number = 1;
	for (let i=1; i <= número; i++){
		total = total * i;
	}
	return total
}

function factorialConLímite (número: number, limite: number):number {
	let total: number = número;
	for (let i=1; i <= número; i++){
		total = total * (número - i);
		if (i === (número - limite)) break;
	}
	return total
}

function permutar (elementos: number, permutaciones: number):number {
	let limitePermutación: number = elementos - permutaciones + 1;
	return factorialConLímite(elementos, limitePermutación)
}

console.log(permutar(13,9));
