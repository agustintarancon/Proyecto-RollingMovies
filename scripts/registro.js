const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const password = document.getElementById("password")

const repeatPassword = document.getElementById("repeatPassword")
const conditions = document.getElementById("checkbox");


const ValidarUser =(event) => {
  event.preventDefault();

  const userData = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    password:password.value,
    // admin: userType === 'admin', 
  };


  const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  
  //Mensajes de los inputs
  const nombreNoV = document.getElementById("nombreNoV")
  const apellidoNoV = document.getElementById("apellidoNoV")
  const emailNoV = document.getElementById("emailNoV")
  const passwordNoV = document.getElementById("passwordNoV")
  const repeatPassNoV = document.getElementById("repeatPassNoV")
  const checkNoV = document.getElementById("checkNoV")
    
  //validaciones 

  if (userData.nombre.length < 3) {
    nombre.style.border = "2px solid red"
    nombreNoV.innerHTML = "<p class='text-danger'> Ingrese un nombre de almenos 3 caracteres </p>"
    nombreNoV.style.display = "block"
    return
  } else {
    nombre.style.border = "2px solid green"
    nombreNoV.style.display = "none"
  }

  if (userData.apellido.length < 3) {
    apellido.style.border = "2px solid red"
    apellidoNoV.innerHTML = "<p class='text-danger'> Ingrese un numero por favor. </p>"
    apellidoNoV.style.display = "block"
    return
  } else {
    apellido.style.border = "2px solid green"
    apellidoNoV.style.display = "none"
  }

  if (!emailRegex.test(userData.email)) {
    email.style.border = "2px solid red"
    emailNoV.innerHTML = "<p class='text-danger'> Ingrese un email valido por favor. </p>"
    emailNoV.style.display = "block"
    return
  } else {
    email.style.border = "2px solid green"
    emailNoV.style.display = "none"
  }

  if (!PasswordRegex.test(userData.password)) {
    password.style.border = "2px solid red"
    passwordNoV.innerHTML = "<p class='text-danger'> La contraseña debe contener al menos 6 caracteres, al menos mayuscula y un numero.  </p>"
    passwordNoV.style.display = "block"
    return
  } else {
    password.style.border = "2px solid green"
    passwordNoV.style.display = "none"
  }
  
  if ( userData.password !== repeatPassword.value) {
    repeatPassword.style.border = "2px solid red"
    repeatPassNoV.innerHTML = "<p class='text-danger'> Las contraseñas no coinciden. </p>"
    repeatPassNoV.style.display = "block"
    return
  } else {
    repeatPassword.style.border = "2px solid green"
    repeatPassNoV.style.display = "none"
  }
  
  if (!conditions.checked) {
    conditions.style.border = "2px solid red"
    checkNoV.innerHTML = "<p class='text-danger'> Acepte los terminos y condiciones. </p>"
    checkNoV.style.display = "block"
    return
  } else {
    conditions.style.border = "2px solid green"
    checkNoV.style.display = "none"
  }
  
  const storedUserData = JSON.parse(localStorage.getItem("users")) || [];    

  const correoExist = storedUserData.find((user) => {
    return user.email === userData.email
    
  })
  
  if (correoExist) {
    alert("existe el mail");
    return
  } else {
    storedUserData.push(userData);
  }

  localStorage.setItem("users", JSON.stringify(storedUserData)); 

  window.location.href = "http://127.0.0.1:5501/pages/login.html"
}  
  
  //   const userType = document.querySelector("input[name='userType']:checked").value; admin ono

    // if (userType === 'admin') {
    //     // 4) Salvar o email em um arquivo TXT ou Outlook
    //     saveEmailToFile(email);

    //     // 5) Enviar um email de boas vindas para o email do usuário
    //     sendWelcomeEmail(email);
    //   }
    // // 5) Função para salvar o email em um arquivo TXT ou Outlook
    // function saveEmailToFile(email) {
    //     // Implemente a lógica para salvar o email em um arquivo
    //   }
      
    //   // 5) Função para enviar um email de boas vindas ao setor de administração
    //   function sendWelcomeEmail(email) {
    //       // Implemente a lógica para enviar o email de boas vindas
    //   }