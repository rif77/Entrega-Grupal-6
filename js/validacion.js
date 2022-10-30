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


let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let botonconfirmar = document.getElementById("botonconfirmar")
let modalspam = document.getElementById('modalspam')

password1.addEventListener('input', function(event){
  if (password1.value.lenght < 6){
    password1.setCustomValidity('invalid');    
  } else {
      event.target.setCustomValidity('');
  }
  if((password1.value != password2.value)){
      password2.setCustomValidity('invalid')
  } else {
    password2.setCustomValidity('')
    }
  }
)

password2.addEventListener('input',function(event){
  if((password1.value != password2.value)){
    password2.setCustomValidity('invalid')
  } else {
    event.target.setCustomValidity('')
  }
}
)

botonconfirmar.addEventListener('click', function (){
  if(!terminos.checked){
    modalspam.classList.remove('d-none')
  }else{
    modalspam.classList.add('d-none')
  }
})

console.log(password1)