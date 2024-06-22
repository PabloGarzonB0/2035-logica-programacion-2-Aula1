let  numero = parseInt(prompt('Por favor, ingrese un numero'));
let dobleNumero = numero => numero*2; //arreglo de funcion
let NumeroM = numero => numero*numero;
let v1 = 15;
let v2 = 25;
let v3 = 30;
let ResultadoPromedio = calculoPromedio(v1,v2,v3);
let texto = 'Numero mayor es: ';

console.log('El doble del numero es: ', dobleNumero(numero));
console.log('El numero multiplicado por si mismo: ', NumeroM(numero));
console.log('El calculo promedio de 3 numeros es: ', ResultadoPromedio);

function calculoPromedio(v1,v2,v3){
    return ((v1+v2+v3)/3);
}

function numeroMayor(num1, num2){
    if(num1 > num2){
        console.log(texto, num1);
    }else{
        console.log(texto, num2);
    }
}

numeroMayor(v1,v2);