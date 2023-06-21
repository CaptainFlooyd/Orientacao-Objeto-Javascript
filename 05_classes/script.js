let cachorro={
    raca:'SRD',
    patas:4,
    latir: function(){
        console.log("Au Au Au");
    }
}
let Pitbull = Object.create(cachorro)

console.log(Pitbull.latir());

Pitbull.raca = "Pitbull";

console.log(Pitbull.raca);

let PastorAlemao = Object.create(cachorro);

PastorAlemao.raca = "Pastor Alemão";

console.log(PastorAlemao.raca);
console.log(PastorAlemao.patas);
console.log(PastorAlemao.latir());

