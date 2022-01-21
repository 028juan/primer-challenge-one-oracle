var textoIngresado = document.getElementById("input-texto");


textoIngresado.addEventListener("input",function(){
    var patron =  /^[a-z\s]{1,200}$/;
    var errorTexto = document.querySelector("#error-texto");

    if(textoIngresado.value.length > 0 &&!patron.test(textoIngresado.value)){
        errorTexto.classList.remove("invisible")
        swal({
            title:"caracter incorrecto",
            text:"vuelva intentar",
            icon:"error"
        })
        
    
    }else{
        errorTexto.classList.add("invisible")
        var encriptadoTexto = document.querySelector("#btn-encriptar");
        encriptadoTexto.addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("msg").value = encriptarTexto(textoIngresado.value)
           
        })
        var desencriptadoTexto = document.querySelector("#btn-desencriptar");
        desencriptadoTexto.addEventListener("click",function(event){
            event.preventDefault();
            document.getElementById("msg").value = desencriptarTexto(textoIngresado.value)

        })
            
    }

});


