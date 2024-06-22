//primer prueba
// let listaGenerica = []; //lista vacia

//segunda prueba
let lenguagesDeProgramacion = ['Java', 'C', 'C++', 'Kotlin', 'Python'];
let listaNum = [100, 8, 13, 23, 19];
let indicador = 4;
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
//tercera prueba
lenguagesDeProgramacion.push('JavaScript','Ruby','GoLang');
// mostrarArreglo(lenguagesDeProgramacion);
//mostrarRArreglo(lenguagesDeProgramacion);
//calcularPromedio(listaNum);
//calcularNumeroGrandeyPequeno(listaNum);
// calcularSumaElementos(listaNum);
//posicionElemento(indicador,listaNum);
//fusionListas(lista1,lista2);
//listaAlCuadrado(lista1);

//cuarta prueba
function mostrarArreglo(lenguagesDeProgramacion){
    for (let i = 0; i < lenguagesDeProgramacion.length; i++){
        console.log('\n',lenguagesDeProgramacion[i],'\n');
    }
}

//quinta prueba
function mostrarRArreglo(lenguagesDeProgramacion){
    let flag = true;
    let i = lenguagesDeProgramacion.length-1
    while(flag){
        console.log('\n',lenguagesDeProgramacion[i],'\n');
        i--;
        if(i < 0){
            flag = false;
        }
    }
}
//sexta prueba
function calcularPromedio(listaNum){
    const reducer = (a, b) => a + b;
    let suma = listaNum.reduce(reducer);
    let promedio = suma / listaNum.length;
    console.log('El promedio de la lista es: ',promedio);
}

//septima prueba
function calcularNumeroGrandeyPequeno(listaNum){
    let max = Math.max(...listaNum);
    let min = Math.min(...listaNum);
    console.log(`El numero maximo en la lista es: ${max} y el numero minimo ${min}`);
}

// alternativa septima prueba

function encontrarMayorMenorlista(listaNum){
    let max = listaNum[0];
    let min = listaNum[0];
    for (let i = 0; i < listaNum.length; i++){
        if(listaNum[i]>max){
            max = listaNum[i];
        }
        if(listaNum[i]<max){
            min = listaNum[i];
        }
        console.log('Mayor: ',max);
        console.log('Menor: ',min);
    }
}

//octava prueba
function calcularSumaElementos(listaNum){
    let suma = 0;
    listaNum.forEach(function(elemento){
           suma += elemento;
    });
    console.log('La suma de los elementos es: ',suma);
}

//novena prueba
function posicionElemento(indicador,listaNum){
    listaNum.forEach(function(elemento,indice){
        indice == indicador ? console.log(`El elemento en la posicion ${indicador} es : ${elemento}`) : console.log('-1');
    });
    };

//decima prueba
function fusionListas(lista1,lista2){
    for (let index = 0; index < lista2.length; index++) {
          lista1.push(lista2[index]);
    }
    console.log(lista1);
}

function listaAlCuadrado(lista1){
    let listaCuadrada = [];
    lista1.forEach(function(elemento){
        listaCuadrada.push(elemento*elemento);
    });
    console.log(listaCuadrada);
}