const quadratic = (a,b,c) => {
	if (a === 1) {
		// Vertice
		centro = -(b/2)
		centroEnY = Math.pow(centro, 2) + (b * centro) + c
		// V. máximo o V. Mínimo
		let vMáximo;
		let vMínimo;
		let rango;
		if (centroEnY > 0) {
			vMáximo = centroEnY
			rango = `(-∞,${centroEnY}]`
		} else if (centroEnY < 0) {
			vMínimo = centroEnY
			rango = `[${centroEnY},∞)`
		}
		b = Math.pow(-(b/2), 2)
		// Cortes en x
		u = Math.sqrt((b)-(c))
		x1 = centro - u
		x2 = centro + u
		return {X1: x1, X2: x2, vertice: [centro,centroEnY], centro:centro, ValorMáximo: vMáximo, ValorMínimo: vMínimo, rango: rango}
	}else if (a > 0){
		let nuevaA = a
		let nuevaB = b
		let nuevaC = c
		a = a/nuevaA
		b = b/nuevaA
		c = c/nuevaA
		centro = -(b/2)
		centroEnY = ( nuevaA * Math.pow(centro, 2) ) + (nuevaB * centro) + (nuevaC)
		let vMáximo;
		let vMínimo;
		let rango;
		if (centroEnY > 0) {
			vMáximo = centroEnY
			rango = `(-∞,${centroEnY}]`
		} else if (centroEnY < 0) {
			vMínimo = centroEnY
			rango = `[${centroEnY},∞)`
		}
		b = Math.pow(-(b/2), 2)
		u = Math.sqrt((b)-(c))
		x1 = centro - u
		x2 = centro + u
		return {X1: x1, X2: x2, vertice: [centro,centroEnY], centro:centro, ValorMáximo: vMáximo, ValorMínimo: vMínimo, rango:rango}
	} 
}
const resultado = JSON.stringify(quadratic(1,4,-12),null,5);
console.log(resultado);
