window.addEventListener('load', function (){
    
    let formulario = document.querySelector('.register');
    formulario.addEventListener('submit', function (e){
        e.preventDefault();

        let campoEmail= document.querySelector('.email');

       if (campoEmail.value == ""){
          alert("El campo de email tiene que estar completo");
       } else if (campoEmail.value.length < 4){
        alert("El campo de email  debe tener al menos 4 caracteres")
       }

    })


});