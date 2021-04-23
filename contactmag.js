//Gerente de contacto


//Estás trabajando en una aplicación Contact Manager.
//Ha creado el constructor del objeto de contacto , que tiene dos argumentos, nombre y número.
//Debe agregar un método print () al objeto, que generará los datos de contacto en la consola en el siguiente formato: nombre: número
//El código dado declara dos objetos y llama a sus métodos print (). Complete el código definiendo el método print () para los objetos.

function contact(name, number) {
    this.name = name;
    this.number = number;
     this.print = function (){
        var x = this.name
        var y = this.number 
        console.log(x+": "+y)
    }
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();