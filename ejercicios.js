//ejercicio 1
let ejer1 = (nombre, apellido, edad) => console.log(`Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`);
ejer1('Leonardo', 'Porras', 19);

//ejercicio 2
let ejer2 = (...rest) => rest.map(x => x*x*x).reduce((a, b) => a+b, 0);
console.log(ejer2(1, 5, 9));

//ejercicio 3
let ejer3 = (a) =>  console.log(typeof(a));
ejer3('hola, mundo')

//ejercicio 4
let ejer4 = (...rest) => rest.reduce((a, b) => a+b, 0);
console.log(ejer4(1, 5, 9));

//ejercicio 5
let ejer5 = (matriz) => matriz.filter(a => typeof(a)=='string');
console.log(ejer5(['a', 'b', 3, 'c']));

//ejercicio 6
let ejer6 = (matriz) => [Math.min(...matriz), Math.max(...matriz)];
console.log(ejer6([9, 4, 3, 99]));

//ejercicio 7
let ejer7 = (matriz) => console.log('(', ...matriz.slice(0, 3), ')', ...matriz.slice(3, 6), '-', ...matriz.slice(6, 10));
ejer7([1,2,3,4,5,6,7,8,9,0]);

//ejercicio 8
let ejer8 = (matriz) => matriz.map(i => Math.max(...i));
console.log(ejer8([[1,2,3], [4,5,6], [7,8,9]]));

//ejercicio 9
let ejer9 = (palabra, letra) => [palabra.indexOf(letra), palabra.lastIndexOf(letra)];
console.log(ejer9('Leonardo', 'o'));

//ejercicio 10
let ejer10 = objeto => {
    let arreglo = [];
    for(const x in objeto) arreglo.push([x, objeto[x]]);
    return arreglo;
}
console.log(ejer10({ a: 1, b: 2 }));

//ejercicio 11
let ejer11 = arreglo => arreglo.map(a => a.budget).reduce((a, b) => a + b);
console.log(ejer11([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));

//ejercicio 12
let ejer12 = arreglo => arreglo.map(a => a.name);
console.log(ejer12([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]));

//ejercicio 13
let ejer13 = objeto => {
    let arreglo = [];
    for(const x in objeto) arreglo.push([x, objeto[x]]);
    return arreglo;
}
console.log(ejer13({
    likes: 2,
    dislikes: 3,
    followers: 10
  }));

//ejercicio 14
let ejer14 = num => {
    let sum=0;
    for(let i=1; i<=num; i++) sum+=i*i;
    return sum;
}
console.log(ejer14(3));

//ejercicio 15
let ejer15 = arreglo => arreglo.map(a => a*arreglo.length);
console.log(ejer15([2, 3, 1, 0]));

//ejercicio 16
let ejer16 = num => {
    let arreglo=[];
    for(let i=5; i>=0; i--) arreglo.push(i);
    return arreglo;
}
console.log(ejer16(5));

//ejercicio 17
let ejer17 = arreglo => Math.max(...arreglo) - Math.min(...arreglo);
console.log(ejer16([10, 4, 1, 4, -10, -50, 32, 21]));

//ejercicio 18
let ejer18 = (matriz) => matriz.filter(a => typeof(a)=='number');
console.log(ejer18([1, 2, 3, "x", "y", 10]));

//ejercicio 19
let ejer19 = (a, b) => {
    let arreglo=[];
    for(let i=0; i<b; i++) arreglo.push(a);
    return arreglo;
}
console.log(ejer19(13, 5));

//ejercicio 20
String.prototype.vreplace = function (vocal) {
    let n = this;
    for(let i=0; i<n.length; i++) if('aeiou'.includes(n[i])) n = n.replace(n[i], vocal);
    return n;
}
console.log("apples and bananas".vreplace('u'));

//ejercicio 21

let ejer21 = palabra => {
    let numero = 0;
    let aux=''
    for(let i=0; i<palabra.length; i++) {
        if(palabra[i]==' ') {
            numero++;
            aux = '';
        }
        aux+=palabra[i];
        if(aux=='Nemo') break;
    }
    return `I found Nemo at ${numero}`;
}

console.log(ejer21("I am finding Nemo !"));

//ejercicio 22
let ejer22 = palabra => palabra.slice(0, palabra.length-1) + palabra[palabra.length-1].toUpperCase();
console.log(ejer22("hello"));

