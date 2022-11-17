const lista1 = [
    100,
    200,
    500,
    400000,
];

function calcularMediaAritmerica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(elemento){
    if(elemento % 2 === 0 ){
        return true;
    }else{
        return false;
    }
}

let mediana;

if( esPar(lista1.length)){
    //Es par
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];

    const promedioElemento1y2 = calcularMediaAritmerica([
        elemento1, 
        elemento2,
    ]);
    mediana = promedioElemento1y2;

} else {
    // Lista no par
    mediana = lista1[mitadLista1];
}