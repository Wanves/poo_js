
export let suma = (a,b)=>{ 
    let resultado = a + b
    console.log(resultado);
}

export let datos = (nombre,id)=>{
    let usuario = nombre + id;
    console.log(usuario);
}

class Usuario{
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    
}


export const usuarios = [
    new Usuario("Juan",777),
    new Usuario("Pam",333 ),
    new Usuario("Cor",444 ),
    new Usuario("Dar",222 ),
    new Usuario("Sam",111 ),
    new Usuario("Mulan",999),
    new Usuario("Neo",555 ),
    new Usuario("Krilin",888)
]

