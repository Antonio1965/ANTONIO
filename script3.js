window.addEventListener('load', function (){

    let formulario = document.querySelector('products');
    formulario.addEventListener('submit', function (e){
        e.preventDefault();

        let campoNombre = document.querySelector('input#name');

       if (campoNombre.value == ""){
          alert("El campo de nombre tiene que estar completo");
       } else if (campoNombre.value.length < 4){
        errors.push("El campo de nombre debe tener al menos 4 caracteres")
       }

       /*
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       let campoEmail = document.querySelector('#email');
       
       if (campoEmail.value == ""){
        alert("El campo de email tiene que estar completo");
       }
       */
    })


});