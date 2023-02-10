// import {getDictionary} from "./dictionary";
//declarar variables
const txtpal = document.getElementById("entrada");
const enviar = document.getElementById("traducir");
const resu = document.getElementById("resultado");
const btnTraslate =document.getElementById("btn-translate");


//evento click
btnTraslate.addEventListener("click",function(e){
    translate();
});

//limpiar formulario
function cleartext(){
    txtpal.value="";
}

//pinta resultado
function setResult(text){
    
    resu.innerText = text;
    cleartext();

}

//funcion principal que traduce
function translate() {
    const preservada = txtpal.value;
    const result = findForWord(preservada);
    setResult(result);
}

//busca en el arreglo diccionario la palabra ingresada
function findForWord(text) {
    //Declaramos nuestro arreglo diccionario
    const WordsDefinitions = getDictionary();

    //Buscamos dentro del arreglo el objeto  que sea igual a la propiedad word
    const object = WordsDefinitions.find(function (obj) {
        return obj.word === text;
    });
    return (object != undefined) ? object.mean : "No se encontro!!";
};



