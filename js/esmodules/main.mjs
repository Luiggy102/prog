// Named imports
// traer individualmente

//import {square as sq} from "./my-math.mjs";

//let cuadradoDe3 = sq(3)
//console.log(cuadradoDe3);

// Namespace imports
// usar como metodo
import * as myMath from './my-math.mjs'

let cuadradoDe3 = myMath.square(3)
let velocidadLuz = myMath.LIGHTSPEED
console.log(cuadradoDe3);
console.log(velocidadLuz);
