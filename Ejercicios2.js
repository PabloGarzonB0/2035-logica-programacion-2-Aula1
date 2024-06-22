//primera prueba
// let altura = parseInt(prompt('Ingrese su altura en centimetros[cm]'));
// let peso = parseInt(prompt('Ingrese su peso en Kilogramos [Kg]'));

// function indiceIMC(altura, peso){
//     let alturametros = altura/100; //conversion a metros 
//     let indicador = Math.floor(peso/alturametros**2);
//     console.log(`Su indice de masa corporal es: ${indicador}`);
// }
// indiceIMC(altura, peso)

//segunda prueba
// let n = parseInt(prompt('Ingrese el numero positivo que quiere factorizar'));
// var factorial=0;
// function calcularfactorial(n){
//     if (n == 1 || n==0){
//         factorial = 1;
//     }else{
//         factorial = n*Calcularfactorial(n-1);
//     }
//     return factorial
// }
// function calcularFactorial2(n){
//     if (n == 1 || n==0){
//         console.log('El factorial que usted espera es: ', n=1);
//     }
//     let iter = 1;
//     for (n; 2 <= n; n--) {
//         iter *= n;   
//     }
//     console.log('El factorial que usted espera es: ', iter);
// }
// calcularFactorial2(n);

//tercera prueba
// let cantidad = parseFloat(prompt('Ingrese la cantidad de reales que quiere convertir en dolares'));

// function conversionRealDolares(cantidadReal){
//     let tipoCambio = 4.8;
//     let cantidadDolares = cantidadReal / tipoCambio;
//     return cantidadDolares;

// }
// let valorEnReal = 40;
// let valorEnDolares = conversionRealDolares(valorEnReal);
// console.log(`${valorEnReal} Reales son igual a ${valorEnDolares} dolares`);

//cuarta prueba
// function calculosRectangulo(longitud,anchura){
//     var area = longitud*anchura;
//     var perimetro = (longitud + anchura)*2;
//     console.log(`El perimetro del rectangulo es ${perimetro}`);
//     console.log(`El perimetro del rectangulo es ${area}`);
// }

// let longitud = parseInt(prompt('Ingrese la longitud del rectangulo'));
// let anchura = parseInt(prompt('Ingrese la anchura del rectangulo'));
// calculosRectangulo(longitud,anchura);

//quinta prueba

// function areaYPerimetroCirculo(radio){
//     let area = Math.PI * Math.pow(radio,2);
//     let periodo = 2*Math.PI * radio;
//     return {area,periodo};
// } 

// let radio = 2;
// let [variable1, variable2] = areaYPerimetroCirculo(radio);
// console.log(`El area del circulo es ${variable1}`);
// console.log(`El perimetro del circulo es ${variable2}`);

//sexta prueba

// function tablaMultiplicar(n){
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i}. ${n} x ${i} = ${i*n} `);
//     }
// }

// let num = 5;
// tablaMultiplicar(num);