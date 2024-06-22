let numeroSecreto = 0; 
const nombrePersona = 'Usuario de la web';
let contador = 1;
let numMax = 3;
let listaNumeroSorteados = [];
let numeroMaximo = 5;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento); //Este es un objeto
    elementoHtml.innerHTML = texto;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
     //el === refiere a que debe ser igual en valor y tipo de dato   
    if(numeroSecreto == numeroUsuario){
        // muestra el numero de intentos  y habilita el boton de reiniciar cuando se acierte
        asignarTextoElemento('p',`Acertaste el numero en ${contador} ${contador==1 ? 'vez':'vecez'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        contador++;
        limpiarCaja();
    }
}

function condicionesIniciales(){
    //Indicar mensaje de inicio
    asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    //generar numero aleatori
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    console.log(numeroSecreto);
}

function reiniciarJuego(){
        limpiarCaja();
        condicionesIniciales();
}

function generarNumeroSecreto(){
    //Numero random desde el 1 al 10
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    //Si el numero generado esta incluido en la lista se hace una operacion
    if (listaNumeroSorteados.includes(numeroGenerado) && listaNumeroSorteados.length != numeroMaximo){
        return generarNumeroSecreto();
    }else if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se acertaron todos los posibles numeros');
    }else{
         listaNumeroSorteados.push(numeroGenerado);
         return  numeroGenerado;
    }     
}
function Saludo(nombre){
    console.log(`Hola ${nombre} es un gusto que estes aqui`);
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

Saludo(nombrePersona);
condicionesIniciales();

