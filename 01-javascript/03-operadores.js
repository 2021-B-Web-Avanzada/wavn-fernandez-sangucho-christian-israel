//Funciones como parametros
//FIND
//enviamos una exoresion -> TRUTY FALSY
//devuelve el primero que cumple esa condiciones
/*const respuestaFind = arreglo1
    .find(
        function (valorActual,indiceActual,arregloCompleto){
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === 'Cristian';
        }
    )
console.log('respuestaFind',respuestaFind);*/
//Cristian //Si no encuentra devuelve undefined


const respuestaIndex = arreglo1
    .findIndex(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nombre === 'Cristian';
        }
    )
console.log('respuestaIndex',respuestaIndex);
//indice -> 6 //No encuentra -> -1


//ForEach
//itera el arreglo
const respuestaForEach = arreglo1
    .forEach(
        function (valorActual,indiceActual,arregloCompleto){
            console.log('valorActual',valorActual);
        }
    )
console.log('respuestaForEach',respuestaForEach);

//MAP (modifica o muta el arreglo y devuelve un nuevo arreglo)
//enviamos los daros del nuevo arreglo
//devuelve el nuevo arrreglo
const respuestaMap = arreglo1
    .map(
        function (valorActual,indiceACtual,arregloCompleto){
            const nuevoElemento = {
                id: valorActual.nombre,
                nombre: valorActual.nombre,
                nota: valorActual.nota+1,
            };
            return nuevoElemento;
        }

    )
console.log('respuestaMap',respuestaMap);


//FILTER(filtrar el arreglo)
//enviamos EXPRESION TRUTY o FALSY
//devuelve los elemtos que complen esa condicion

const respuestaFilter = arreglo1
    .filter(
        (valoActual, indiceActual, arregloCompleto) => {
            return valoActual.nota >= 14;
        }
    )
console.log('respuestaFilter',respuestaFilter);
console.log('arreglo1',arreglo1)


//SOME -> Expresion
//devuelve BOOLEANO
//Hay alguna nota menor a nueve? SI NO
//OR
const respuestaSome = arreglo1
    .some(
        function(valorActual,indiceActual,arregloCompleto) {
            return valorActual.nota < 9;

        }
    )
console.log('respuestaSome',respuestaSome);


//[1,2,3,4,5,6,7,8]
//REDUCE        izq -> der
//REDUCE RIGHT  der -> izq
//100<3 Puntos de vida
//100 -1 -2 -3 -4 -5 -6 =
//0 1 +2 +3 +4 +5 +6 +8 =
const respuestaReduce = arreglo1
    .reduce(
        function (valorAcumulado, valorActual,indice,arreglo1){
            return (valorAcumulado + valorActual.nota);
        },
        100 //Acumulador
    )
console.log('respuestaReduce',respuestaReduce);