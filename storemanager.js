//Gerente de la tienda


//Está trabajando en un programa Store Manager, que almacena los precios en una matriz.
//Debe agregar funcionalidad para aumentar los precios en la cantidad dada.
//La variable de aumento se toma de la entrada del usuario. Necesita aumentar todos los precios en la matriz dada en esa cantidad y enviar a la consola la matriz resultante.

function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
        for(var i=0;i<=prices.length-1;i++){
        prices[i]=prices[i]+increase;
    }
    console.log(prices);
}

