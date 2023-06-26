//clase
class Persona {
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: string;
    private peso: number;
    private altura: number;
    //constructor
    constructor(nombre: string, edad: number, dni: string, sexo: string = "H", peso: number = 0, altura: number = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}

// instancias de Persona
const persona1 = new Persona("Juan", 30, "12345678A");
const persona2 = new Persona("María", 25, "98765432B", "M");
const persona3 = new Persona("Carlos", 40, "56789012C", "H", 75, 180);