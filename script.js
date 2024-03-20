const campoTexto = document.querySelector("#encriptaTexto");
const campoMensajeEn = document.querySelector("#mensajeEncriptado");

const matriz_encrip = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],

];
 function btnEncriptar(){
     const texto = encriptar(campoTexto.value);
     campoMensajeEn.value = texto;

 }
 function encriptar(textoNoEncriptado){
     for(let i =0; i<matriz_encrip.length; i++){
         if(textoNoEncriptado.includes(matriz_encrip[i][0])){
            textoNoEncriptado = textoNoEncriptado.replaceAll(
                 matriz_encrip[i][0],
                 matriz_encrip[i][1]
             )
         }
     }
     return textoNoEncriptado;

 }
 function btnDesEncriptar(){
     const textoEn = desEncriptar(campoTexto.value);
     campoMensajeEn.value = textoEn;

 }
 function desEncriptar(textoEncriptado){
     for(i=0; i<matriz_encrip.length; i++){
         if(textoEncriptado.includes(matriz_encrip[i][1])){
             textoEncriptado = textoEncriptado.replaceAll(
                 matriz_encrip[i][1],
                 matriz_encrip[i][0]
             )
         }
     }
     return textoEncriptado;
 }


