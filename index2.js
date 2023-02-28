const espacio = ()=>{
    console.log();
}
const imprimir = (frase)=>{
    // espacio();
    console.log(frase);
    // espacio();
}
class Cuenta_Corriente{
    constructor(numero_cuenta, saldo_cuenta, agencia){
        this.numero_cuenta = numero_cuenta;
        this.saldo_cuenta = saldo_cuenta
        // this.saldo_cuenta = 0; para inicializar el valor dede cero respectivamente
        this.agencia = agencia;
        // this.agencia = null;
    }
    deposito_en_cuenta = (valor)=>{
        if(valor > 0)
        this.saldo_cuenta +=  valor;
        console.log(`Saldo actual: ${this.saldo_cuenta}`)
    }
    extraccion_en_cuenta = (valor)=>{
        if(valor <= this.saldo_cuenta){
            this.saldo_cuenta -= valor;
        }
        if(valor >= 0){
           console.log(`*******Saldo actual ${this.saldo_cuenta}`);
        }       
    }
    ver_saldo = ()=>{
        return this.saldo_cuenta;
    }
    tranferir_para_cuenta = (valor, cuenta_destino)=>{
        this.extraccion_en_cuenta(valor);
        cuenta_destino.deposito_en_cuenta(valor)
    }    
    mostarInfo_cuenta_corriente(){
        imprimir(`\nNúmero de cuenta: ${this.numero_cuenta} || Saldo de cuenta: ${this.saldo_cuenta}  || Agencia: ${this.agencia} -----`);
    }
    
}

const cuenta_corriente1 = new Cuenta_Corriente("777111", 5000, 1001);
const cuenta_corriente2 = new Cuenta_Corriente("555111", 1000, 1002);
const cuenta_corriente3 = new Cuenta_Corriente("111777", 5000, 1003);
console.log()
console.log("----------Saldos Clientes---------");
cuenta_corriente1.mostarInfo_cuenta_corriente(); 
cuenta_corriente2.mostarInfo_cuenta_corriente(); 
cuenta_corriente3.mostarInfo_cuenta_corriente();
console.log()
console.log("----------*******************************---------");
console.log()
console.log("----------Saldos Flujo1 Deposito | extracción---------");
console.log()
console.log(`Saldo actual: ${cuenta_corriente1.saldo_cuenta}`);
cuenta_corriente1.saldo_cuenta = cuenta_corriente1.saldo_cuenta + 100;
console.log(`Saldo actualizado: ${cuenta_corriente1.saldo_cuenta}`);
console.log()
console.log("----------*******************************---------");
console.log()
console.log("----------Saldos Flujo2 Deposito | extracción---------");
console.log()
// console.log(`Saldo actual: ${cuenta_corriente2.saldo_cuenta}`);
// cuenta_corriente2.saldo_cuenta = cuenta_corriente2.saldo_cuenta + 100;
// console.log(`Saldo actualizado: ${cuenta_corriente2.saldo_cuenta}`);
console.log()
console.log("----------*******************************---------");
console.log()
cuenta_corriente1.tranferir_para_cuenta(2000, cuenta_corriente2);
console.log(`Saldo cuenta2: ${cuenta_corriente2.saldo_cuenta}`);
console.log(`Saldo cuenta1: ${cuenta_corriente1.saldo_cuenta}`);



console.log()
console.log("----------Saldos Flujo Cliente1 Deposito | extracción---------");
console.log()
console.log(cuenta_corriente1.saldo_cuenta)
cuenta_corriente1.deposito_en_cuenta(500);
cuenta_corriente1.deposito_en_cuenta(500);
console.log(cuenta_corriente1.saldo_cuenta)
cuenta_corriente1.deposito_en_cuenta(50000);
cuenta_corriente1.extraccion_en_cuenta(1000);
console.log(cuenta_corriente1.saldo_cuenta);
cuenta_corriente1.extraccion_en_cuenta(10000);
cuenta_corriente1.deposito_en_cuenta(-20000)
cuenta_corriente1.extraccion_en_cuenta(2000000);
cuenta_corriente1.extraccion_en_cuenta(10000);
cuenta_corriente1.deposito_en_cuenta(200000);
cuenta_corriente1.extraccion_en_cuenta(50000);
console.log(cuenta_corriente1.saldo_cuenta);
console.log(`Cliente1 saldo actual  ${cuenta_corriente1.saldo_cuenta}`);
console.log(cuenta_corriente1.saldo_cuenta)
console.log()
console.log("----------*******************************---------");
console.log()
console.log()
console.log("----------Saldos Actual Cliente1 Deposito | extracción---------");
console.log()
let saldo_actual = cuenta_corriente1.ver_saldo();
console.log(`Saldo actual1: ${saldo_actual}`)
// console.log(`El saldo actual es: ${saldo_actual}`)
console.log()
let saldo_actual2 = cuenta_corriente2.ver_saldo();
console.log(`Saldo actual2: ${saldo_actual2}`)
console.log("----------*******************************---------");
console.log()
console.log("----------Saldos Actuales---------");
console.log(cuenta_corriente1.ver_saldo());
console.log(cuenta_corriente2.ver_saldo());
console.log(cuenta_corriente3.ver_saldo());
console.log("----------*******************************---------");
console.log()
console.log(cuenta_corriente1)

