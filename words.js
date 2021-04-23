//Palabras


//Estás creando un cifrador de texto. Debe tomar varias palabras y generar una versión combinada, donde cada palabra está separada por un signo de dólar $.
//Por ejemplo, para las palabras " hola ", " cómo ", " estás ", " tú ", la salida debería ser " $ hola $ cómo $ eres $ tú $ ".
//El código dado declara una clase llamada Add , con un constructor que toma un parámetro de descanso.
//Complete el código agregando un método print () a la clase, que debería generar la salida solicitada.

class Add {
    constructor(...words) {
        this.words = words;
    }
    print() {
      console.log('$'+this.words.join('$')+'$');
    }
  }
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print();
  y.print();
  z.print();
