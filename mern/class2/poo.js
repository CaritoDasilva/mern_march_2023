class BankAccount {

    constructor(rut, nombre, saldo, direccion) {
        this.rut = rut;
        this.nombre = nombre;
        this.saldo = saldo;
        this.direccion = direccion;
        this.numberAccount = Math.random();
        this.isActive = true;
    }

    changeStatusAccount(status) {
        this.isActive = status;
    }

    closeAccount() {
        this.saldo = 0;
        this.changeStatusAccount(false);
    }

    transferCredit(destination, amount) {
        if (amount > this.saldo) {
            console.log('error')
        } else {
            this.saldo -= amount;
            destination.creditCharge(amount);
        }
    }

    getCredit() {
        return this.saldo;
    }

    creditCharge(credit) {
        this.saldo += credit;
    }

    creditWithdraw(credit) {
        this.saldo -= credit;
    }

}

class CreditAccount extends BankAccount {

    constructor(rut, nombre, saldo, direccion) {
        super(rut, nombre, saldo, direccion)
        this.creditCardLimit = 1000000;
        this.creditLine = 300000;
        this.usedCredit = 0;
    }

    payCreditCard(amount) {
        this.creditCardLimit += amount;
        this.usedCredit -= amount;
    }

    useCreditCard(amount) {
        this.creditCardLimit -= amount;
        this.usedCredit += amount;
    }

}

class SaveAccount extends BankAccount {

    constructor() {
        super()
    }

}

class Client {

    constructor(accounts) {
        this.accounts = accounts;
    }
}

const account1 = new BankAccount('11111111-1', 'Juanita Soto', 20000, 'Calle Real 123, Valdivia');
// console.log("🚀 ", account1);
// account1.creditCharge(24000);
// console.log("🚀 ", account1.saldo);
// account1.creditWithdraw(230);
// console.log("🚀 ", account1.saldo);

const account2 = new CreditAccount('22222222-2', 'Pablo Pueblo', 50000, 'calle blabla 456, Quito')
// console.log("🚀 ~ file: poo.js:68 ~ account2:", account2)
// console.log(account2.isActive);
// account2.useCreditCard(20000);
// console.log("🚀 ~ file: poo.js:68 ~ account2:", account2)
account1.transferCredit(account2, 500)

console.log(account1.saldo)
console.log(account2.saldo)