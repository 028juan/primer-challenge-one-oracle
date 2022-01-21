
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptarTexto(texto){
    
    texto= texto.replaceAll("e", "enter")
    texto=texto.replaceAll("i", "imes")
    texto = texto.replaceAll("a", "ai")
    texto= texto.replaceAll("o", "ober")
    texto= texto.replaceAll("u", "ufat")
   
    
    
return texto;
}

function desencriptarTexto(textoCodigo){
    textoCodigo = textoCodigo.replaceAll("enter","e")
    textoCodigo = textoCodigo.replaceAll("imes","i")
    textoCodigo = textoCodigo.replaceAll("ai","a")
    textoCodigo = textoCodigo.replaceAll("ober","o")
    textoCodigo = textoCodigo.replaceAll("ufat","u")
return textoCodigo;

}
var btn = document.querySelector("#btn-copy");
btn.addEventListener("click",function(event){
    event.preventDefault();
    var id = document.getElementById("msg");
    if(id.value.length>0){
        id.select()
        swal({
            title:"copiado",
            icon:"success"
        })
        navigator.clipboard.writeText(id.value);
    }else{
        swal({
            title:"no hay texto",
            icon:"error"
        })
    }
        
        
        
})

var btnPegar = document.querySelector("#btn-pegar")
btnPegar.addEventListener("click",function(event){
    event.preventDefault()
    var id = document.getElementById("msg")
    if(id.value.length>0){
        document.getElementById("input-texto").value = ""
        document.getElementById("input-texto").value = id.value
        swal({
            title:"texto pegado",
           
            icon:"success",
            buttons:false,
            timer:2000
        })
    }else{
        swal({
            title:"no hay texto",
            icon:"error"
        })
    }
})

                           
        
           

        
    





