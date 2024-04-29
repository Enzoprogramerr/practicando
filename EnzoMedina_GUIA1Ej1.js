/* Si tengo seis dispositivos dispuestos en topología malla, tendré 15 cables para la conexión, ya que el 
calculo de conexiones es n.(n-1)/2 donde n es el numero de dispositivos.En consecuencia necesitaré cinco
puertos en cada dispositivo para establecer conexion con todos.*/

function conection (dispositivos,tipo){
    if (tipo == "simplex"){
        console.log("Para " + dispositivos + " dispositivos en conexion " + tipo + " se necesitan: " + dispositivos*(dispositivos-1) + " cables")
    }
    else {
        console.log("Para " + dispositivos + " dispositivos en conexion " + tipo + " se necesitan: " + dispositivos*(dispositivos-1)/2 + " cables")
    }
}

let ej1 = conection(6,"simplex")
let ej2 = conection(6,"duplex")

