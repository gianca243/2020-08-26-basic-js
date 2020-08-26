var nombre = "Nombre apellido"
nombre ="elsa capuntas"
console.log(nombre)
var global = 0
function varGoblal() {
    for (var i = 0; i < 5; i++) {
        global=i
    }
}
varGoblal()
console.log(global)
function varPrueba() {
    var x = 70
    if (true){
        var x=50
        console.log(x)
    }
    console.log(x)
}
function letPrueba() {
    let x = 70
    if (true){
        let x=50
        console.log(x)
    }
    console.log(x)
}
function impresion(num1, num2) {
    return num1+num2
}
let sumar = (a,b)=> a+b
console.log("ggg",sumar(4,6))
console.log(impresion(5,3))
let hello = function () {
    return "hello w"
}
console.log(hello())
let color = prompt("ingrese el color en ingles")
if (color == "red"){
    document.write("<h1 style='color:red'> si el color es red</h1>")
} else {
    document.write("<h1 style='color:"+color+"'> si el color no es red</h1>")
}
let year = 2021
if(year !=2020){
    document.write("el año es otro ")
} else {
    document.write("es el 2020 ")
}
let nota = 3.7
if (nota >= 4.5 && nota >=5){
    document.write("good you won")
} else if(nota < 4.5 && nota >=0){
    document.write("vuelve a intentarlo !!")
} else {
    document.write("ingrese un numero entre 0 y 5")
}
let operacion = prompt("operacion:")
let num1 = parseFloat(prompt("ingrese un numero"))
let num2 = parseFloat(prompt("ingrese un segundo numero"))
switch (operacion) {
    case "suma":
        
        document.write("<br> el resultado de la suma es: "+(num1+num2))
        break;
    case "resta":
        
        document.write("<br> el resultado de la resta es: "+(num1-num2))
        break;
    case "multiplicación":
       
        document.write("<br> el resultado de la multiplicacion es: "+(num1*num2))
        break;
    case "division":
   
        document.write("<br> el resultado de la división es: "+(num1/num2))
        break;

    default:
        break;
}