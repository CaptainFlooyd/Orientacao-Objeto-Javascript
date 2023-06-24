class Conta{
   constructor(saldo) {
      this.saldo = saldo;
   }
   
deposito(valor) {
    this.saldo += valor;


}
saque(retirar){
       this.saldo -= retirar ; 
}

}

let conta = new Conta (1000);


conta.deposito(1000);

console.log(conta)

conta.saque(200)

console.log(conta)