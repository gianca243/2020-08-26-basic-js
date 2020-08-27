
const operacion = document.getElementById("aritmetica")
const promedioSet = document.getElementById("promedioSet")
const setP = document.getElementById("botonP")
const setA = document.getElementById("botonA")

operacion.addEventListener("click",()=>{
    
    //promedio remove
    promedioSet.classList.add("hide")
    setP.classList.add("hide")
    //aritmetico remove    
    setA.classList.remove("hide")
    //obtencion de datos
    
    //manejo eventos
    const suma = document.getElementById("suma")
    suma.addEventListener("click",()=>{
        let num1 = parseFloat(document.getElementById("num1").value)
        let num2 = parseFloat(document.getElementById("num2").value)
        let resultado = num1+num2
        respuesta.innerHTML = "<i>"+resultado+"</i>"
    })
    const resta = document.getElementById("resta")
    resta.addEventListener("click",()=>{
        let num1 = parseFloat(document.getElementById("num1").value)
        let num2 = parseFloat(document.getElementById("num2").value)
        let resultado = num1-num2
        respuesta.innerHTML = "<i>"+resultado+"</i>"
    })
    const multiplicacion = document.getElementById("multiplicacion")
    multiplicacion.addEventListener("click",()=>{
        let num1 = parseFloat(document.getElementById("num1").value)
        let num2 = parseFloat(document.getElementById("num2").value)
        let resultado = num1*num2
        respuesta.innerHTML = "<i>"+resultado+"</i>"
    })
    const division = document.getElementById("division")
    division.addEventListener("click",()=>{
        let num1 = parseFloat(document.getElementById("num1").value)
        let num2 = parseFloat(document.getElementById("num2").value)
        let resultado = num1/num2
        respuesta.innerHTML = "<i>"+resultado+"</i>"
    })
})
const promedioB = document.getElementById("promedioB")
promedioB.addEventListener("click",()=>{
    console.log("se ingreso")
    //promedio push
    promedioSet.classList.remove("hide")
    setP.classList.remove("hide")
    //aritmetico remove    
    setA.classList.add("hide")
    //manejo eventos
    const promedio = document.getElementById("promedio")
    promedio.addEventListener("click", ()=>{
        let num1 = parseFloat(document.getElementById("num1").value)
        let num2 = parseFloat(document.getElementById("num2").value)
        let num3 = parseFloat(document.getElementById("num3").value)
        let respuesta = document.getElementById("respuesta")
        let resultado = (num1+num2+num3)/3
        respuesta.innerHTML = "<i>"+resultado+"</i>"
    })
})