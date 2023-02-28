
class Clientes:
    def __init__(self,nombre_cliente, dni_cliente, rut_cliente):
        self.nombre_cliente = nombre_cliente
        self.dni_cliente = dni_cliente
        self.rut_cliente = rut_cliente
    
    def __str__(self):
        print(f"\nNombre: {self.nombre_cliente} || Dni: {self.dni_cliente } || Rut: {self.rut_cliente} || -----");
    
    def set_modifica_rut_cliente(self,nuevo_rut):
        self.rut_cliente = nuevo_rut;

cliente1 = Clientes("Juan", "22111222","111")
cliente2 = Clientes("Sam", "3311333","222")
cliente3 = Clientes("Neo", "55666777","333")
print()
print("Rut inicial-----------------------------------------")
cliente1.__str__()
cliente2.__str__()
cliente3.__str__()
print("----------------------------------------------------")
print()
print("Rut nuevo-----------------------------------------")
cliente1.set_modifica_rut_cliente(777)
cliente2.set_modifica_rut_cliente(666)
cliente3.set_modifica_rut_cliente(555)
cliente1.__str__()
cliente2.__str__()
cliente3.__str__()
print("----------------------------------------------------")
print()

class Cuenta_Corriente:
    def __init__(self,numero_cuenta, saldo_cuenta, agencia):
        self.numero_cuenta = numero_cuenta
        self.saldo_cuenta = saldo_cuenta
        self.agencia = agencia
        
    def deposito_en_cuenta(self,valor):
        if valor > 0:
            self.saldo_cuenta +=  valor;
            print(f"Saldo actual: {self.saldo_cuenta}")
    def  extraccion_en_cuenta(self,valor):
        if valor <= self.saldo_cuenta:
            self.saldo_cuenta -= valor
        
        if(valor >= 0):
           print(f"*******Saldo actual {self.saldo_cuenta}")
    def ver_saldo(self):
        return self.saldo_cuenta
    
    def tranferir_para_cuenta(self, valor, cuenta_destino):
        self.extraccion_en_cuenta(valor)
        cuenta_destino.deposito_en_cuenta(valor)
        
    def  mostarInfo_cuenta_corriente(self):
        print(f"\nNúmero de cuenta: {self.numero_cuenta} || Saldo de cuenta: {self.saldo_cuenta}  || Agencia: {self.agencia} -----")
    
cuenta_corriente1 = Cuenta_Corriente("777111", 5000, 1001)
cuenta_corriente2 = Cuenta_Corriente("555111", 1000, 1002)
cuenta_corriente3 = Cuenta_Corriente("111777", 5000, 1003)
print()
cuenta_corriente1.mostarInfo_cuenta_corriente() 
cuenta_corriente2.mostarInfo_cuenta_corriente() 
cuenta_corriente3.mostarInfo_cuenta_corriente() 
print()
print("----------*******************************---------")
print()
print("----------Saldos Flujo1 Deposito | extracción---------")
print()
print(f"Saldo actual: {cuenta_corriente1.saldo_cuenta}")
cuenta_corriente1.saldo_cuenta = cuenta_corriente1.saldo_cuenta + 100
print(f"Saldo actualizado: {cuenta_corriente1.saldo_cuenta}")
print()
print("----------*******************************---------")
print()
print("----------Saldos Flujo2 Deposito | extracción---------")
print()
cuenta_corriente1.tranferir_para_cuenta(2000, cuenta_corriente2);
print(f"Saldo cuenta2: ${cuenta_corriente2.saldo_cuenta}");
print(f"Saldo cuenta1: ${cuenta_corriente1.saldo_cuenta}");
print()
print("----------*******************************---------")
print()
print("----------Saldos actuales---------")
print()
print(cuenta_corriente1.ver_saldo())
print(cuenta_corriente2.ver_saldo())
print(cuenta_corriente3.ver_saldo())

