// Cuadrado
console.group("Cuadrados"); // Agrupamos todos los console log
                            // para imprimirlos juntos 
const ladoCuadrado =5;
console.log("Los lados del cuadrado miden "+ ladoCuadrado + "cm");

// Perimetro
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es "+perimetroCuadrado + "cm");

// Area
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es "+areaCuadrado + "cm c");

console.groupEnd();  //Finaliza la impresion de console log en grupo

//Triangulo
console.group("Triangulos "); 

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; 

console.log("Los lados del cuadrado miden "
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    +"y la base: "
    + baseTriangulo + "cm"
    );

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de "+ alturaTriangulo + "cm");

// Perimetro
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de "+ perimetroTriangulo + "cm");

// Area
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del Triangulo es de " + areaTriangulo + "cm c");

console.groupEnd();

// Circulo
console.group("Circulos");

// Radio 
const radioCirculo = 4;
console.log("El radio del circulo es de "+ radioCirculo + "cm");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de "+ diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI vale "+ PI);

// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de "+ perimetroCirculo + "cm");

// Area
const areaCirculo = (radioCirculo * radioCirculo) *PI;
console.log("El area del circulo es de "+ areaCirculo + "cm c");

console.groupEnd();