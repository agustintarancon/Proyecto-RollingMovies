document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.querySelector("input[placeholder='Nombre Completo']").value;
    const email = document.querySelector("input[placeholder='Correo Electronico']").value;
    const password = document.querySelector("input[placeholder='Contraseña']").value;
    const confirmPassword = document.querySelector("input[placeholder='Repite la Contraseña']").value;

    // 1) Regex para o email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("El correo electrónico no cumple el formato válido de un email.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const userType = document.querySelector("input[name='userType']:checked").value;

    const userData = {
      fullName: fullName,
      email: email,
      password: password,
      esadmin: userType === 'admin', // Agora isso vai funcionar corretamente
    };
    

    // Acessando os dados do Local Storage e exibindo no console
    const storedUserData = localStorage.getItem("userData");
    let users = [];

    if (storedUserData) {
      users = JSON.parse(storedUserData);
      console.log(users);
    }


    


    // Adicione o usuário atual à lista de usuários
    users.push(userData);

    // Salve a lista de usuários no Local Storage
    localStorage.setItem("userData", JSON.stringify(users));

    form.reset();

    if (userType === 'admin') {
      // 4) Salvar o email em um arquivo TXT ou Outlook
      saveEmailToFile(email);

      // 5) Enviar um email de boas vindas para o email do usuário
      sendWelcomeEmail(email);
    }

    alert("Registro exitoso. Puedes iniciar sesión ahora.");
  });
});

// 5) Função para salvar o email em um arquivo TXT ou Outlook
function saveEmailToFile(email) {
  // Implemente a lógica para salvar o email em um arquivo
}

// 5) Função para enviar um email de boas vindas ao setor de administração
function sendWelcomeEmail(email) {
  // Implemente a lógica para enviar o email de boas vindas
}
