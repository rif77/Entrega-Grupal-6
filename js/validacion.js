(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
;

  let password1 = document.getElementById("password1")
  let password2 = document.getElementById("password2")
  let formularioDeRegistro = document.getElementById("formularioDeRegistro")

  formularioDeRegistro.addEventListener('submit', function(event){
    event.preventDefault
    if((password1.value.length > 5) && (password1.value === password2.value)){
        form.classList.add('was-validated')
    } else {
        console.log("la contraseña es corta o no coinciden")
    }
  })
