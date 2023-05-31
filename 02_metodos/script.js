const cachorro = {
   raca:'SRD',
    latir:function(){
        console.log("Au Au Au")
    },
    rosnar:function(){
        console.log("Agrrrrrrr")

    },
    setRaca:function(raca){
        this.raca= raca;

    },
    getRaca: function(){
        return "A raça é " + this.raca;7
    },
}

console.log(cachorro.raca);
cachorro.setRaca("Pincher");
console.log(cachorro.raca);
console.log(cachorro.getRaca());