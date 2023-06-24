class Mamifero{
   constructor(patas){
      this.patas = patas;
   }
}


let zebra = new Mamifero(4);

console.log(zebra.patas);

class Cachorro extends Mamifero {
   constructor(patas, raca) {
      super(patas,patas);
      this.raca = raca;
   }

   latir() {
      console.log("Au Au");
   }

}

let pug = new Cachorro(4,"Pug");


console.log(pug);  

pug.latir();