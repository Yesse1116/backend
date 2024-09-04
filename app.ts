
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

class Producto{
    nombre: string;
    precio: number;
    cantidad: number;

    constructor (nombre:string, precio:number, cantidad:number){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    mostrarDetalles(): string{
    return `Producto: ${this.nombre}, ${this.precio}`;
}
}

const producto1 = new Producto( "Banana", 1500, 5)
const producto2 = new Producto( "Manzana", 2500, 4)
const producto3 = new Producto( "Mandarina", 1500, 9)

console.log (`producto: ${producto1.nombre}, ${producto1.precio}`)
console.log (`producto: ${producto2.nombre}, ${producto2.precio}`)
console.log (`producto: ${producto3.nombre}, ${producto3.precio}`)

class Persona{
    nombre: string;
    edad: number;
    profesion: string

    constructor (nombre:string, edad:number, profesion:string = "Desconocido"){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
}

const persona1 = new Persona( "Juan", 15, "aaa")
const persona2 = new Persona( "Rodrigo", 25)
const persona3 = new Persona( "Santiago", 32)

console.log (`persona: ${persona3.nombre}, ${persona3.edad}, ${persona3.profesion}`)
console.log (`persona: ${persona2.nombre}, ${persona2.edad}, ${persona2.profesion}`)
console.log (`persona: ${persona1.nombre}, ${persona1.edad}, ${persona1.profesion}`)

class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
    mover() {
        console.log(`${this.nombre} se mueve y salta`);
    }
}
class Perro extends Animal {
    ladrar() {
        console.log(`${this.nombre} ladra mucho`);
    }
}
const miPerro = new Perro("Kiwi");
miPerro.mover(); 
miPerro.ladrar();