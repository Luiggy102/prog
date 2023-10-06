const suma = (num1, num2) => console.log(num1 + num2);

// Ejecutar funcion suma
// funcion, tiempo, parametros
//setTimeout(suma, 2000, 2, 2)
const ejecutarSuma = setTimeout(suma, 2000, 2, 2);

// cancelar la ejercución 
// ya no ejecutes suma
clearTimeout(ejecutarSuma)

// ejecutar lo más rápido
setTimeout(() => console.log('zero delay'), 0)
