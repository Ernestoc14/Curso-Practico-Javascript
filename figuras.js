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

//Interaccion con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function alturaTriangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado1 != lado3){
        //calcula
        const alturaT = Math.sqrt(lado1**2 - lado3**2 / 4);
        console.log(alturaT);
        return alturaT;
    }else if(lado1 == lado3 && lado1 !=lado2){
        //calcula
        //const altura = Math.sqrt(lado1**2 - lado2**2 / 4);
        //return altura;
    }else{
        //alert('No es Isosceles');
    }
}

//Interaccion con HTML
function calcularAlturaTriangulo(){
    const lado1 = document.getElementsByClassName("lado");
    const value = lado1.value;

    // const lado2 = document.getElementsByClassName("lado");
    // const segundo = lado2.value;

    // const lado3 = document.getElementById("base");
    // const value3 = lado3.value3;

    const altura = alturaTriangulo(value, value2, value3);
    alert(value);
}