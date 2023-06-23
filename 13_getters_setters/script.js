class Dog{
   constructor(raca) {
      this.raca = raca;

   }
   ladrar() {
      console.log("Au Au ");
   }

   get verRaca(){
      return "A raça é " + this.raca;
   }
   set novaRaca(raca){
      this.raca = raca;
   }
}

let pitbull = new Dog("Pastor Alemão");

console.log(pitbull.verRaca);

pitbull.novaRaca = "Golden Retriver";

console.log(pitbull.verRaca);

pitbull.ladrar();