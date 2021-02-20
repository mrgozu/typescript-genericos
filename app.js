"use strict";
function regresar(arg) {
    return arg;
}
console.log(regresar(15.4513453));
console.log(regresar('hola 15.45'));
console.log(regresar(new Date()));
var deadpool = {
    nombre: 'deadpool',
    nombreReal: 'Wade Winston',
    poder: 'Regeneracion'
};
console.log(regresar(deadpool).poder);
// Clases genericas
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return this.base * this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
