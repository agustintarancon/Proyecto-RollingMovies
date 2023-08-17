const nombre = document.getElementById("nombre")
  const descripcion = document.getElementById("descripcionE")
  const emailInput = document.getElementById("email");
  const enviar = document.getElementById("enviar")


// Funcion para validar de los inputs
const validaciones = (event) => {
  event.preventDefault();

 const nombreV = nombre.value
 const descripcionV = descripcion.value
 const emailInputV = emailInput.value
  
  //Expresiones regulares
  const nombreRegex = /^[a-zA-ZáÁéÉíÍóÓúÚñÑ\s'\-]{3,20}$/
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  //Mensajes de los inputs

  const nombreNoV = document.getElementById("nombreNoV")
  const emailNoV = document.getElementById("emailNoV"); // Cambiado "emailNov" a "emailNoV"
  const descripcionNoV = document.getElementById("descripcionNoVE"); // Corregido "descripcionNoVE" a "descripcionNoV"

  //VALIDACIONES DE LOS INPUTS
  if (!nombreRegex.test(nombreV)) {
    nombre.style.border = "2px solid red"
    nombreNoV.innerHTML = "<p class='text-danger'> Ingrese un nombre de almenos 3 caracteres, solo letras </p>"
    nombreNoV.style.display = "block"
    return
  } else {
    nombre.style.border = "2px solid green"
    nombreNoV.style.display = "none"
  }
  
  if (!emailRegex.test(emailInputV)) {
    email.style.border = "2px solid red"
    emailNoV.innerHTML = "<p class='text-danger'> Ingrese un email valido por favor. </p>"
    emailNoV.style.display = "block"
    return
  } else {
    email.style.border = "2px solid green"
    emailNoV.style.display = "none"
  }

  if (descripcionV.length < 10) {
    descripcion.style.border = "2px solid red"
    descripcionNoV.innerHTML = "<p class='text-danger'> Ingrese una descripcion de almenos 10 caracteres </p>"
    descripcionNoV.style.display = "block"
    return
  } else {
    descripcion.style.border = "2px solid green"
    descripcionNoV.style.display = "none"
  }

  enviar.addEventListener("click", ()=>{
    window.location.href = "../pages/404.html"
  })


};
