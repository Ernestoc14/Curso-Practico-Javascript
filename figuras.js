// Cuadrado
console.group("Cuadrados"); // Agrupamos todos los console log
                            // para imprimirlos juntos 
//const ladoCuadrado =5;
//console.log("Los lados del cuadrado miden "+ ladoCuadrado + "cm");
//console.log("El perimetro del cuadrado es "+perimetroCuadrado + "cm");

// Perimetro
function perimetroCuadrado(lado){
    return lado * 4;
} 
perimetroCuadrado()


// Area
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es "+areaCuadrado + "cm c");

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();  //Finaliza la impresion de console log en grupo

//Triangulo
console.group("Triangulos "); 

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4; 

// console.log("Los lados del cuadrado miden "
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     +"y la base: "
//     + baseTriangulo + "cm"
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de "+ alturaTriangulo + "cm");

// Perimetro
function perimetroTriangulo(lado, base){
    return (lado * 2) + base;
}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es de "+ perimetroTriangulo + "cm");

// Area
function areaTriangulo(altura, base){
    return (altura * base)/2
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("El area del Triangulo es de " + areaTriangulo + "cm c");

console.groupEnd();

// Circulo
console.group("Circulos");

// Radio 
// const radioCirculo = 4;
// console.log("El radio del circulo es de "+ radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es de "+ diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI vale "+ PI);

// Perimetro
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es de "+ perimetroCirculo + "cm");

// Area
function areaCirculo(radio){
    return (radio * radio) *PI;
}
// const areaCirculo = (radioCirculo * radioCirculo) *PI;
// console.log("El area del circulo es de "+ areaCirculo + "cm c");

console.groupEnd();