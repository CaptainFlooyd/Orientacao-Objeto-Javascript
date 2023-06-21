const dog={
    raca: "SRD",
    latir:function(){
        console.log("Au Au Au")
    },
    rosnar: function(){
        console.log("GRRRRRRRRRRR");

    },
    setRaca: function(raca){
        this.raca = raca;

    },
    getRaca: function(){
        return "A raça é " + this.raca;
    },
}
console.log(dog.raca)

dog.setRaca("Golden");
console.log(dog.getRaca());
dog.setRaca("Pinscher");
console.log(dog.getRaca());
console.log(dog.raca);
dog.setRaca("Pitbull");
console.log(dog.getRaca());
console.log(dog.raca);
console.log(dog.latir());
console.log(dog.rosnar());  