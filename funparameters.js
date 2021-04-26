//Parámetros de función

/* No guarde lo que queda después de gastar; en su lugar, 
gaste lo que queda después de ahorrar", dijo Warren Buffett. 
Inspirado por estas palabras, Jack decidió ahorrar el 15% de su salario mensual.
Se le da un programa que toma el salario como entrada. 
Complete la función para calcular y generar los ahorros. 
Entrada de muestra 200 Salida de muestra 30 */

function main() {
    var salaryAmount = parseInt(readLine(), 10);
    // complete the function call
    getSavings(salaryAmount);
}
//complete the function
function getSavings(amount) {
savings = amount * 0.15
console.log(savings)
    
};