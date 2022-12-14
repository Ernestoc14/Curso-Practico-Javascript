//Helpers
function esPar(number){
    // if(number % 2 == 0){
    //     return true;
    // } else{
    //     return false;
    // }
    return (number % 2 === 0);
}

function calcularMediaAritmerica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calculadora de Medianas


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmerica([personaMitad1,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosPan = panama.map(
    function (persona){
        return persona.salary;
    }
);

const salariosPanSorted = salariosPan.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralPan = medianaSalarios(salariosPanSorted);

//Mediana del Top 10%
const spliceStart = (salariosPanSorted.length * (90)) / 100;
const spliceCount = salariosPanSorted.length - spliceStart;

const salariosPanTop10 = salariosPanSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Pan = medianaSalarios(salariosPanTop10);

console.log(
    medianaGeneralPan,
    medianaTop10Pan,
);