const emailInput = document.getElementById("email");
const passwordinput = document.getElementById("password");

//Boton mostrar contraseña
const button1C = document.getElementById("button1C");
//Evento mostrar contraseñas
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

const validarSesion =(event) => {
  event.preventDefault();
  
    const email = emailInput.value;
    const password = passwordinput.value

    storedUserData = JSON.parse(localStorage.getItem("users")) || [];
    admin = JSON.parse(localStorage.getItem("admin"));
    
    // mensajes de inputs
    const noExist = document.getElementById("noExist")
    const emailNoV = document.getElementById("emailNoV")
    const passwordNoV = document.getElementById("passwordNoV")

    //Expresiones regulares
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // validaciones de inputs
    if (!emailRegex.test(email)) {
      emailNoV.innerHTML = "<p class='text-danger'> Ingrese un email valido  </p>"
      emailNoV.style.display = "block"
      return
    } else {
      emailNoV.style.display = "none"
    }

    if (password < 1) {
      passwordNoV.innerHTML = "<p class='text-danger'> complete este campo  </p>"
      passwordNoV.style.display = "block"
      return
    } else {
      passwordNoV.style.display = "none"
    }

    const autenticUsers = storedUserData.find((user) => {
      if (user.email === email && user.password === password) {
        return user
      }
    }) 

  if (admin.email === email && admin.password === password) {
     localStorage.setItem("authadmin", JSON.stringify(admin))
      window.location.href = "http://127.0.0.1:5501/index.html"
    } else if (autenticUsers) {
      localStorage.setItem("authUser", JSON.stringify(autenticUsers))
      window.location.href = "http://127.0.0.1:5501/index.html"
    } else {
      noExist.innerHTML = "<p class='text-danger'> Las credenciales no son correctas </p>"
      noExist.style.display = "block"
      return
  }
}