//El caracol en el pozo


//El caracol sube 7 pies cada día y retrocede 2 pies cada noche.
//¿Cuántos días tardará el caracol en salir de un pozo con la profundidad dada? Ejemplo de entrada: 31 Ejemplo de resultado: 6 Explicación : Analicemos la distancia que cubre el caracol cada día: Día 1: 7-2 = 5 Día 2: 5 + 7-2 = 10 Día 3:10 + 7-2 = 15 Día 4:15 + 7-2 = 20 Día 5:20 + 7-2 = 25 Día 6:25 + 7 = 32 Entonces, en el Día 6 el caracol alcanzará 32 pies y saldrá del pozo durante el día, sin resbalarse esa noche.

function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    var day = 0;
    var total = 0;
    while(total<depth){
        day = day + 1;
        total = total + 7;
        if(total >= depth){
            console.log(day);
            break;
        }
        total = total - 2;
    }

}