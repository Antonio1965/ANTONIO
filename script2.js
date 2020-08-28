window.addEventListener('load', function (){
    
    let formulario = document.querySelector('.login');
    
    formulario.addEventListener('submit', function (e){
        
        let errores = [];

        let campoEmail = document.querySelector('.email');

       if (campoEmail.value == ""){
         errores.push("El campo de email tiene que estar completadas.");
      
       }
       let campoPassword = document.querySelector('.password');

       if (campoPassword.value == ""){
         errores.push("El campo de password tiene que estar completadas.");
      
       }
       if (errores.length > 0){
        e.preventDefault();

        let ulErrores = document.querySelector('div.errores ul')
        for(let i=0; i < errores.length; i++){
           ulErrores.innerHTML += "<li>"+ errores[i] + "</li>"
        }

       }
    })


});