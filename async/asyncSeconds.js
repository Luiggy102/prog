console.log('Inicio');

setTimeout(()=> {
	console.log('cero segundos');
	setTimeout(() => {
		console.log('dos segundos');
		console.log('terminado');
	}, 2000)
},0)
