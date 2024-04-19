const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))
// Exporta la función para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = {sum, fromEuroToDollar}


const fromDollartoYen = function(valueInDollar) {
    let valueInDollar= oneEuroIs.JPY / fromEuroToDollar(1);
    let valueInYen = valueInDollarinYen * valueInDollar;
    return valueInYen;
}

const fromYenToPound = function (valueInYen){
    let valueYenInPound = oneEuroIs.GBP /fromDollartoYen(1);
    let valueInPound = valueYenInPound * valueInYen;
    return valueInPound;
}
module.exports = {sum, fromEuroToDollar}

console.log(fromYenToPound(1));