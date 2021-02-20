
function regresar<T>(arg:T):T{
    return arg;
    
}

console.log(regresar(15.4513453));
console.log(regresar('hola 15.45'));
console.log(regresar(new Date()));

type Heroe = {
    nombre:string;
    poder:string;
}
type Villano  ={

    nombre: string;
    poder:string;

}

let deadpool = {
    nombre: 'deadpool',
    nombreReal: 'Wade Winston',
    poder: 'Regeneracion'
}

console.log(regresar<Heroe>(deadpool).poder);


// Clases genericas
class Cuadrado <T extends number|string>{
    base:<T>;
    altura:<T>;
    area():number{
        return this.base * this.altura
    }
}

let cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());