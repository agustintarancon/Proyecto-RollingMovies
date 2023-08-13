document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");
  const recoveryLink = document.querySelector(".recovery-link");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("input[placeholder='Correo Electronico']").value;
    const password = document.querySelector("input[placeholder='Contraseña']").value;

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const users = JSON.parse(storedUserData);

      const user = users.find(userData => userData.email === email && userData.password === password);

      if (user) {
        if (user.esadmin) {
          window.location.href ="administracion.html"; // Redireciona para a página de administração
        } else {
          alert("Inicio de sesión exitoso");
          window.location.href = "../index.html"; // Redireciona para a página principal
        }
      } else {
        alert("Credenciales incorrectas. Por favor, verifique su correo electrónico y contraseña.");
      }
    } else {
      alert("No hay datos de registro almacenados. Regístrese primero.");
    }
  });
});
