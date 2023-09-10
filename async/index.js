// interactuar con el event loop
const bar = () => console.log('bar');
const baz = () => console.log('baz');

const printAMessage = () => { console.log('Mensaje Next Tick'); }

const foo = () => {
	console.log('foo');
	setTimeout(bar,0)
	baz()
}

foo()

// cuando se vacia el event loop va el process Tick
process.nextTick( () => {printAMessage()} )

// Después va el setTimeout
