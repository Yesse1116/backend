/*
class Persona{
    nombre: string;
    edad: number;

    constructor (nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad
}
    MostrarInformacion(): void{
        const div = document.getElementById("persona");
    if (div){
        div.innerHTML= `Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`
        }
    }
}

class Curso {
    nombre: string;
    codigo: string;
    horas: number;

    constructor (nombre: string, codigo: string, horas:number){
        this.nombre = nombre
        this.codigo = codigo
        this.horas = horas
}
mostrarDetalles(): string{
    return `Curso: ${this.nombre}, Codigo ${this.codigo}, horas: ${this.horas}`;
}
}

class Estudiantes {
    nombre: string;
    matricula: number;
    cursos: Curso[] = []

    constructor (nombre: string, matricula:number){
        this.nombre = nombre
        this.matricula = matricula
}
inscribirCurso( curso : Curso): void{
this.cursos.push(curso)
}
mostrarInformacion(): void{
    const div = document.getElementById("estudiante");
    if (div){
        div.innerHTML += `<h3> ${this.nombre} matricula ${this.matricula} </h3>`
        div.innerHTML += `Cursos Inscriptos <br>`
        this.cursos.forEach((curso) =>{
            div.innerHTML += curso.mostrarDetalles()
        })
        
        }
}
}

class Profesor extends Estudiantes {
    departanento: string

    constructor (nombre: string, matricula:number, departanento: string){
        super(nombre, matricula)
        this.departanento = departanento
}
inscribirCurso( curso : Curso): void{
this.cursos.push(curso)
}
mostrarInformacion(): void{
    const div = document.getElementById("profesores");
    if (div){
        div.innerHTML += `<h3> ${this.nombre} matricula ${this.matricula}, Departamento ${this.departanento} </h3>`
        div.innerHTML += `Cursos que dicta <br>`
        this.cursos.forEach((curso) =>{
            div.innerHTML += curso.mostrarDetalles()
        })
        
        }
}
}


const persona1 = new Persona("Cosme", 35)
persona1.MostrarInformacion();
const cursoEstadistica = new Curso ("Estadistica", "EST203", 30)
const cursoMatematica = new Curso ("Matematica", "MAT203", 40)

const estudiante1 = new Estudiantes("Pepe Fulano", 12345)
const estudiante2 = new Estudiantes("Pepe Fulana", 23456)
const estudiante3 = new Estudiantes("Papo Fulano", 12265)

estudiante1.inscribirCurso(cursoEstadistica)
estudiante2.inscribirCurso(cursoMatematica)
estudiante3.inscribirCurso(cursoEstadistica
)
estudiante3.inscribirCurso(cursoMatematica)

estudiante1.mostrarInformacion()
estudiante2.mostrarInformacion()
estudiante3.mostrarInformacion()


const profesor1 = new Profesor("Pepe Fulano", 12345, "Ciencias Naturales")
const profesor2 = new Profesor("Ema Fulana", 23456, "Matematicas")

profesor1.inscribirCurso(cursoEstadistica)
profesor2.inscribirCurso(cursoMatematica)


profesor1.mostrarInformacion()
profesor2.mostrarInformacion()
 */
var Producto = /** @class */ (function () {
    function Producto(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    Producto.prototype.mostrarDetalles = function () {
        return "Producto: ".concat(this.nombre, ", ").concat(this.precio);
    };
    return Producto;
}());
var producto1 = new Producto("Banana", 1500, 5);
var producto2 = new Producto("Manzana", 2500, 4);
var producto3 = new Producto("Mandarina", 1500, 9);
console.log("producto: ".concat(producto1.nombre, ", ").concat(producto1.precio));
console.log("producto: ".concat(producto2.nombre, ", ").concat(producto2.precio));
console.log("producto: ".concat(producto3.nombre, ", ").concat(producto3.precio));
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, profesion) {
        if (profesion === void 0) { profesion = "Desconocido"; }
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    return Persona;
}());
var persona1 = new Persona("Juan", 15, "aaa");
var persona2 = new Persona("Rodrigo", 25);
var persona3 = new Persona("Santiago", 32);
console.log("producto: ".concat(persona3.nombre, ", ").concat(persona3.edad, ", ").concat(persona3.profesion));
console.log("producto: ".concat(persona2.nombre, ", ").concat(persona2.edad, " ").concat(persona2.profesion));
console.log("producto: ".concat(persona1.nombre, ", ").concat(persona1.edad, " ").concat(persona1.profesion));
