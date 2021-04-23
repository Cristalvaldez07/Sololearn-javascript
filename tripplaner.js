//Planificador de viajes


// Necesitas planificar un viaje por carretera. Viaja a una velocidad promedio de 40 millas por hora .
//Dada una distancia en millas como entrada (el código para tomar la entrada ya está presente), envíe a la consola el tiempo que le tomará recorrerlo en minutos . Entrada de muestra: 150 Salida de muestra: 225 


function main() {
    var distance = parseInt(readLine(), 10);
    //your code goes here
    const speed = 40
    const time = distance/speed
    const timeInMinutes = time * 60
    console.log(timeInMinutes)
}
