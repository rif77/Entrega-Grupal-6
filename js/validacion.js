(function () {
  'use strict'


  var forms = document.querySelectorAll('.needs-validation')


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

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById('email')
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let formularioDeRegistro = document.getElementById("formularioDeRegistro")
let botonConfirmar = document.getElementById('botonConfirmar')
let terminos = document.getElementById('terminos')
let terminos2 = document.getElementById('terminos2')
let modalspan = document.getElementById('modalspan')
let verificador= ""

password1.addEventListener('input', function  (event){

if((password1.value.length < 6)){

  password1.setCustomValidity('invalid')
} else {
  event.target.setCustomValidity('');
}
if((password1.value != password2.value)){

  password2.setCustomValidity('invalid')
} else {
  password2.setCustomValidity('')
}
})
password2.addEventListener('input', function  (event){
if(password1.value != password2.value){
  password2.setCustomValidity('invalid')

} else {
  event.target.setCustomValidity('');
}
})

terminos.addEventListener("click", function (){
if(verificador !=""){
if(terminos.checked){
  terminos2.style.color='black'
  modalspan.classList.add('d-none')
}if(!terminos.checked){
  terminos2.style.color='#ff0000'
  modalspan.classList.remove('d-none')
}
}
})



botonConfirmar.addEventListener('click', function (){
verificador="boton presionado"
if(!terminos.checked){
 modalspan.classList.remove('d-none')
 terminos2.style.color='#ff0000'
}else {
  modalspan.classList.add('d-none')
}
if ((terminos.checked) &&(password1.value.length > 5) &&(password1.value === password2.value)&&(nombre.value.length != 0)&&(apellido.value.length != 0)){
  alert("exitoso")
}

})

