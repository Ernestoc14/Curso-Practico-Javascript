const precioOriginal = 155;
const descuento = 17;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDescuento");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrecio = document.getElementById("resultPrice");
    resultPrecio.innerText = "El precio con descuento es: $" +precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     precioConDescuento,
//     porcentajePrecioConDescuento
// });