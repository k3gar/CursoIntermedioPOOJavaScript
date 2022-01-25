const juan = {
    name: 'Juanito',
    age: 18,
    approvedCourses: ["Course 1"],
    addCourse(newCourse){
        console.log('this', this)
        console.log('this.approvedCourses', this.approvedCourses)
        this.approvedCourses.push(newCourse)
    }
}

/* console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))
console.log(Object.entries(juan)) */


/* Object.defineProperty(juan, "pruebaNASA", {
    value: "Extraterrestres",
    writable: true,
    enumerable: true,
    configurable: true
})
Object.defineProperty(juan, "pruebaAtlantida", {
    value: "Atlantianos",
    writable: false,
    enumerable: false,
    configurable: false
})
Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    enumerable: false,
    configurable: true
})
Object.defineProperty(juan, "editor", {
    value: "VSCode",
    writable: false,
    enumerable: true,
    configurable: true
})
Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    enumerable: true,
    configurable: false
}) */

/* Object.seal(juan) */ // Ayuda a colocar todos los valores de configurable en False
Object.freeze(juan) //coloca a Writeable y configurable como false

console.log(Object.getOwnPropertyDescriptors(juan))