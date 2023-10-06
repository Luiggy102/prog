// Trabajar con eventos custom

const { EventEmitter } = require('events')
const miEmisor = new EventEmitter();

// on: una funcion que se ejecutra cuando el evento empieza
// emit : para desencadenar evento

miEmisor.on('inicio', () => {
	console.log('iniciado')
})

miEmisor.emit('inicio')
