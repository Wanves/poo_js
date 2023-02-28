import {suma, datos, usuarios} from "./datos_varios.js";
const espacio = ()=>{
    console.log();
}
const imprimir = (frase)=>{
    // espacio();
    console.log(frase);
    // espacio();
}
// class Clientes{
//     constructor(nombre_cliente, dni_cliente, rut_cliente){
        
//         this.nombre_cliente = nombre_cliente;
//         this.dni_cliente  = dni_cliente;
//         this.rut_cliente = rut_cliente;
        
//     }
//     mostarInfo(){
//         imprimir(`\nNombre: ${this.nombre_cliente} || Dni: ${this.dni_cliente } || Rut: ${this._rut_cliente} || -----`);
        
//     }
//     set set_modifica_cliente(nuevo_cliente){
//         this.nombre_cliente = nuevo_cliente
//     }
//     get get_modifica_cliente(){
//         return this.nombre_cliente
//     }
//     set set_modifica_dni_cliente(nuevo_dni_cliente){
//         this.dni_cliente = nuevo_dni_cliente
//     }
//     set set_modifica_rut_cliente(nuevo_rut){
//         this.rut_cliente = nuevo_rut;
//     }
    
   
    
// }

// const cliente1 = new Clientes("Juan", "22111222","111");
// const cliente2 = new Clientes("Sam", "3311333","222");
// const cliente3 = new Clientes("Neo", "55666777","333");
// const cliente4 = new Clientes("One", "111000333","444");


// console.log("----------Datos Clientes---------");
// cliente1.mostarInfo();
// cliente1.set_modifica_cliente = "Wanvestrant";
// cliente1.get_modifica_cliente;
// cliente1.set_modifica_dni_cliente = "00000000";
// cliente1.get_modifica_dni_cliente;
// cliente1.set_modifica_rut_cliente = "777";
// cliente1.get_modifica_rut_cliente;
// cliente1.mostarInfo();
// cliente2.mostarInfo();
// cliente3.mostarInfo();
// cliente4.mostarInfo();
// console.log()
// console.log()
// console.log()
// console.log("----------*******************************---------");
// console.log()
// ----------------------------------------------------

class Cuenta_Corriente{
    static cantidad_de_cuentas = 0;
    constructor(numero_cuenta, saldo_cuenta, agencia){
        this.numero_cuenta = numero_cuenta;
        this.saldo_cuenta = saldo_cuenta
        // this.saldo_cuenta = 0; para inicializar el valor dede cero respectivamente
        this.agencia = agencia;

        Cuenta_Corriente.cantidad_de_cuentas ++;
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
        imprimir(`\nNúmero de cuenta: ${this.numero_cuenta} || Saldo de cuenta: ${this.saldo_cuenta}  || Agencia: ${this.agencia} -----${Cuenta_Corriente.cantidad_de_cuentas}`);
        
    }
    
}

const cuenta_corriente1 = new Cuenta_Corriente("777111", 5000, 1001);
const cuenta_corriente2 = new Cuenta_Corriente("555111", 1000, 1002);
const cuenta_corriente3 = new Cuenta_Corriente("111777", 5000, 1003);
const cuenta_corriente4 = new Cuenta_Corriente("777111", 5000, 1001);
const cuenta_corriente5 = new Cuenta_Corriente("555111", 1000, 1002);
const cuenta_corriente6 = new Cuenta_Corriente("111777", 5000, 1003);
console.log()
console.log("----------Saldos Clientes---------");
cuenta_corriente1.mostarInfo_cuenta_corriente(); 
cuenta_corriente2.mostarInfo_cuenta_corriente(); 
cuenta_corriente3.mostarInfo_cuenta_corriente();
cuenta_corriente4.mostarInfo_cuenta_corriente(); 
cuenta_corriente5.mostarInfo_cuenta_corriente(); 
cuenta_corriente6.mostarInfo_cuenta_corriente();

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
console.log(`La cantidad de cuentas es: ${Cuenta_Corriente.cantidad_de_cuentas}`)
console.log()


// class Animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
       
//     }
//     comer() {
//         imprimir("Esta comiendo");
//     }
// }

// class  Perro extends Animal{
//     constructor(especie,edad,color,dientes){
//         super(especie,edad,color);
//         this.dientes = dientes;
       
//     }
//     ladrar(){
//         imprimir("waw waw waw!");
//     }
//     jugar(){
//         imprimir("Zoe esta jugando");
//     }
//     set setmodificarDientes(nuevoNombre){
//         this.dientes = nuevoNombre;
//     }

//     get getDientes(){
//         return this.dientes
//     }
// }


// const zoe = new Perro("perritu",4,"caquita","Muy linditos");
// imprimir(`Zoe Especie: ${zoe.especie}, Edad: ${zoe.edad}, Color: ${zoe.color}, Dientes: ${zoe.dientes}`);   
// zoe.ladrar();
// zoe.jugar();
// imprimir(zoe.dientes)
// zoe.setmodificarDientes = "😃";
// imprimir(zoe.getDientes);

// suma(10,30);suma(10,5);
// console.log()
// datos("Juan Wanvestrant ", 777);
// console.log()
// console.log(usuarios);
// console.log()
// console.log(usuarios[3]);
// console.log()

