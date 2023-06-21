const cachorro={
    orelha: 2,
    pata: 4,
}

console.log(Object.getPrototypeOf(cachorro));
console.log(Object.getPrototypeOf(cachorro) == Object.getPrototypeOf);

const cachorroNovo = Object.create(cachorro);

console.log(cachorroNovo.pata);
console.log(cachorroNovo.hasOwnProperty('pata'))

console.log(Object.getPrototypeOf(cachorroNovo) == cachorro)