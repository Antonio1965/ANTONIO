window.addEventListener('load', function(){
    
let formulario = document.querySelector('.contact-form');

    
    formulario.addEventListener('submit', function(e){

        let errores = [];

       let campoNombre = document.querySelector('#fullName');

       if (campoNombre.value == ""){
          errores.push("El campo de nombre tiene que estar completo");
       } else if (campoNombre.value.length < 4){
        errors.push("El campo de nombre debe tener al menos 4 caracteres")
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        errores.push("El campo de email tiene que estar completo");
       }
       let campoTelefono = document.querySelector('#phone');
       
       if (campoTelefono.value == ""){
        errores.push("El campo de numero de telefono tiene que estar completo");
       }
       let campoContraseña = document.querySelector('#password');
       
       if (campoContraseña.value == ""){
        errores.push("El campo de Contraseña tiene que estar completo");
       }
       let campoRepassword = document.querySelector('#repassword');
       
       if (campoRepassword.value == ""){
        errores.push ("El campo de Repetir Contraseña tiene que estar completo");
       }
       if (errores.length > 0){
        e.preventDefault();

        let ulErrores = document.querySelector('div.errores ul')
        for(let i=0; i < errores.length; i++){
           ulErrores.innerHTML += "<li>"+ errores[i] + "</li>"
        }

       }
       
    });
})