// SUMAR NUMEROS CON REDUCE

const numeros = [5, 10, 15, 20];

const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma);