class Persona{

    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }

    saludar(){
        return this.datos
    }
}

const santiago = new Persona('Santiago','Lopez',18);
console.log(santiago.saludar());
console.log(santiago);