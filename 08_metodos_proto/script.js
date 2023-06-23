function Cachorro(raca,patas,cor){
   this.raca = raca;
   this.patas = patas;
   this.cor = cor;
   }

Cachorro.prototype.uivar= function(){
   console.log("Auuuuuuuuuuu");
   }
Cachorro.prototype.latir = function(){
   console.log("Au Au Au");
   }

let husky = new Cachorro('Husky',4,'Branco');

console.log(husky)
husky.uivar();
husky.latir();