const insertionSort = require('./insertionSort');
const shellSort = require('./shellSort');
const selectionSort = require('./selectionSort');

listaInversa = (max) =>{
    let listaInversa = [];

    for(x = max; x > 0; x--){
        listaInversa.push(x);
    }

    return listaInversa;
}

listaCrescente = (max) =>{
    let listaCrescente = [];

    for(x = 1; x <= max; x++){
        listaCrescente.push(x);
    }

    return listaCrescente;
}

crescenteCem = () =>{
    console.log("Lista crescente 100")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@INSERTION@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    insertionSort(listaCrescente(100));
    console.log("*****************************SELECTION*******************************")
    selectionSort(listaCrescente(100));
    console.log("#############################SHELLSORT###############################")
    shellSort(listaCrescente(100));
}

crescenteDuz = () =>{
    console.log("Lista crescente 200")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@INSERTION@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    insertionSort(listaCrescente(200));
    console.log("*****************************SELECTION*******************************")
    selectionSort(listaCrescente(200));
    console.log("#############################SHELLSORT###############################")
    shellSort(listaCrescente(200));
}

crescenteTrez = () =>{
    console.log("Lista crescente 400")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@INSERTION@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    insertionSort(listaCrescente(400));
    console.log("*****************************SELECTION*******************************")
    selectionSort(listaCrescente(400));
    console.log("#############################SHELLSORT###############################")
    shellSort(listaCrescente(400));
}

decresCem = () =>{
    console.log("Lista decrescente 100")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@INSERTION@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    insertionSort(listaInversa(100));
    console.log("*****************************SELECTION*******************************")
    selectionSort(listaInversa(100));
    console.log("#############################SHELLSORT###############################")
    shellSort(listaInversa(100));
}

decresDuz = () =>{
    console.log("Lista decrescente 200")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@INSERTION@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    insertionSort(listaInversa(200));
    console.log("*****************************SELECTION*******************************")
    selectionSort(listaInversa(200));
    console.log("#############################SHELLSORT###############################")
    shellSort(listaInversa(200));
}

decresTrez = () =>{
    console.log("Lista decrescente 400")
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@INSERTION@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    insertionSort(listaInversa(400));
    console.log("*****************************SELECTION*******************************")
    selectionSort(listaInversa(400));
    console.log("#############################SHELLSORT###############################")
    shellSort(listaInversa(400));
}

crescenteCem()
crescenteDuz()
crescenteTrez()
decresCem()
decresDuz()
decresTrez()