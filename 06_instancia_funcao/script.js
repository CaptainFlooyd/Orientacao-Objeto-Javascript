function criarCachorro(raca,patas,cor){
   let cachorro = Object.create({});
   cachorro.raca = raca;
   cachorro.patas = patas;
   cachorro.cor = cor;
   cachorro.latir = function(){
      console.log("Au Au Au")
   }
   return cachorro;
}


let Dakota = criarCachorro("Golden",4,"Amarela");

console.log(Dakota);

Dakota.latir();