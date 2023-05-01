function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");
    var condicion = /^[a-z0-9\s]+$/;

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
                        
    if (texto.length != 0){
        if (condicion.test(texto) == false){
            alert("El texto no es valido, sin mayusculas ni acentos");
            munieco.src = "Muñeco.svg";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        } else {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto encriptado con éxito";
            parrafo.textContent = "";
            munieco.src = "all-might.jpg";
        }
    } else {
        munieco.src = "Muñeco.svg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");

    let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        munieco.src = "all-might.jpg";
    } else{
        munieco.src = "Muñeco.svg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}