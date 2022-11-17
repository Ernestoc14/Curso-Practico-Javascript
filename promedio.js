
function calcularMediaAritmerica(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    //Otra manera de Iterar la Lista
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

calcularMediaAritmerica([1,14,151,98]);