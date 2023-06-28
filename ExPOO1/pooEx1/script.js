class Conta{
   constructor(saldo) {
      this.saldo = saldo;
   }
   /* Deposit */
deposito(valor) {
    this.saldo += valor;


}
/* WhithDraw */
saque(retirar){
       this.saldo -= retirar ; 
}

}

let conta = new Conta (1000);

conta.deposito(200);

console.log(conta);

conta.saque(300);

console.log(conta);





