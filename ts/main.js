function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(100, 10));
console.log(getFinalPrice(100, 20));
// types
let taxCode = 1;
//taxCode = "lowIncome"
// ========= type annotations ============== //
// el tipo de dato :
let firstName;
let age; // type annotations
//TypeScript offers the following type annotations:
// string—For textual data
// boolean—For true/false values
// number—For numeric values
// symbol—A unique value created by calling the Symbol constructor
// any—For variables that can hold values of various types, which may be unknown
//when you’re writing the code
// unknown—A counterpart of any, but no operations are permitted on an unknown
//without first asserting or narrowing it to a more specific type
// never—For representing unreachable code (we’ll provide an example shortly)
// void—An absence of a value
//Symbol is a primitive data type that is always unique and immutable. In the following code snippet, sym1 is not equal to sym2:
const sym1 = Symbol('orderID');
const sym2 = Symbol('orderID');
// se usan crear llaves unicas en objetos
const ord = Symbol('orderID');
const myOrder = {
    ord: "123" // el simbolo
};
console.log(myOrder['ord']); //123
// undefined = valor sin asignar
// null = no asiginar intencionado
let someVar = null;
// | significa unión
function getName() {
    return null;
}
// Evitar any para mejorar redivilidad
let otherVar;
otherVar = 4;
otherVar = 'string';
// never
// funcion q nunca acaba
//() => never
const logger = () => {
    while (true) {
        console.log('The server is up and running');
    }
};
// void 
// si termina pero no retorna nada
function getTax(income) {
    return income * 0.12;
}
let yourTax = getTax(2500);
function calcTax(state, income, dependents) {
    if (state === 'NY') {
        return income * 0.06 - dependents * 500;
    }
    else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}
let tax = calcTax('NJ', 50000, 2);
// =============== Union Type ================//
// barra vertical |
let padding;
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    // no se ejecuta
    else {
        return padding;
    }
    // no se ejecuta
    throw new Error(`Expected string or number, got '${padding}'.`);
}
console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says "));
// si no se completa se va a quejar 
let paciente = {
    nombre: 'Joe Smith',
    altura: 1.80,
    peso: 80
};
let carro1 = {
    marca: 'BMW',
    matricula: 'ACB-987',
};
let carro2 = {
    marca: 'AUDI',
    matricula: 'ACB-488',
    color: 'rojo'
};
//type ValidatorFn =
//(c: FormControl) => { [key: string]: any }| null
// Tipos en clasees
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    ;
}
// (public) es el nivel de acceso
// los valores se puede aceder dentro o fuera de `class`
const p = new Person('John', 'Smith', 25);
console.log(p);
p.firstName = 'asdf';
// con la clase como tipo
const p2 = new Person('Luke', 'Smith', 50);
console.log(p2);
