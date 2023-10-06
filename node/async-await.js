// ejemplo
// resolve: resolver
// reject: rechazar
//							paso 1
// la funcion asyncrona devuelve una promesa

const hazAlgoAsincrono = () => {
	return new Promise(
		(resolver) => {
			setTimeout(() => resolver('¡hice algo!'), 2000);
		}
	)
}

//							paso 2
// si quiero llamar la funcion asincrona pongo await
// antes de llamar a la funcion
// Ej:			== await hazAlgoAsincrono() ==
// ( la funcion padre debe de tener async )

const hazAlgo = async () => {
	console.log(await hazAlgoAsincrono());
}

console.log('antes');
hazAlgo()
console.log('después');

// las funciones com el prefijo async siempre retorna una
// promesa, incluso si no esta explicito
