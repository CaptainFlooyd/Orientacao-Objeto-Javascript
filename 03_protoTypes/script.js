const cachorro ={
    patas: 4,
}

console.log(Object.getPrototypeOf(cachorro));
console.log(Object.getPrototypeOf(cachorro)==- Object.prototype);
console.log(cachorro.hasOwnProperty('patas'))