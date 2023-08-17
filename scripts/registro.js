
//Capturar valores de los input
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const password = document.getElementById("password")
const repeatPassword = document.getElementById("repeatPassword")
const conditions = document.getElementById("checkbox");

//Botones mostrar contraseña
const button1C = document.getElementById("button1C");
const button2C = document.getElementById("button2C");
//Eventos mostrar contraseñas
button1C.addEventListener("click", () => {
  const openEye = document.getElementById("eyeC");
  const closeEye = document.getElementById("closeEyeC");
  if (password.type === "password") {
    password.type = "text";
    closeEye.style.display = "none";
    openEye.style.display = "block";
  } else {
    password.type = "password";
    closeEye.style.display = "block";
    openEye.style.display = "none";
  };
})
button2C.addEventListener("click", () => {
  const openEyeR = document.getElementById("eyeR");
  const closeEyeR = document.getElementById("closeEyeR");
  if (repeatPassword.type === "password") {
    repeatPassword.type = "text";
    closeEyeR.style.display = "none";
    openEyeR.style.display = "block";
  } else {
    repeatPassword.type = "password";
    closeEyeR.style.display = "block";
    openEyeR.style.display = "none";
  };  
})

//Validar inputs
const ValidarUser =(event) => {
  event.preventDefault();

  const userData = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    password:password.value,
    admin: "false"
  };

  const nombreRegex = /^[a-zA-ZáÁéÉíÍóÓúÚñÑ\s'\-]{3,20}$/
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

  if (!nombreRegex.test(userData.nombre)) {
    nombre.style.border = "2px solid red"
    nombreNoV.innerHTML = "<p class='text-danger'> Ingrese un nombre de almenos 3 caracteres, solo letras </p>"
    nombreNoV.style.display = "block"
    return
  } else {
    nombre.style.border = "2px solid green"
    nombreNoV.style.display = "none"
  }

  if (!nombreRegex.test(userData.apellido)) {
    apellido.style.border = "2px solid red"
    apellidoNoV.innerHTML = "<p class='text-danger'> Ingrese un apellido de almenos 3 caracteres, solo letras </p>"
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

  window.location.href = "../pages/login.html"
}  
  
 //cuenta para el admin
    const admin = {
      email: "admin@gmail.com",
      password:"Admin123",
      admin: "true"
    };

    localStorage.setItem("admin", JSON.stringify(admin)); 