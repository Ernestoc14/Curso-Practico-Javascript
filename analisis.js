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

console.log(
    medianaSalarios(salariosPanSorted)
);