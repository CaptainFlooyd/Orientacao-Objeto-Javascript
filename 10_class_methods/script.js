class Cachorro{
   constructor(raca,cor){
      this.raca = raca;
      this.cor = cor;
   }

   latir() {
      console.log("Au Au");
   }

}
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador',4,'Amarelo');

console.log(labrador.patas);

labrador.latir();