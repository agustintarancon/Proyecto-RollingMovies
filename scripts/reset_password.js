document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");

    forgotPasswordForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = emailInput.value;

        // Validación básica del correo electrónico
        if (!isValidEmail(email)) {
            showMessage("Por favor, ingresa un correo electrónico válido.", "error");
            return;
        }

        try {
            // Simulación de una solicitud al servidor para la recuperación de contraseña
            const response = await simulateForgotPassword(email);
            if (response.success) {
                showMessage("Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña.", "success");
            } else {
                showMessage("El correo electrónico no está registrado en nuestra base de datos.", "error");
            }
        } catch (error) {
            console.error(error);
            showMessage("Ocurrió un error al procesar la solicitud.", "error");
        }
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showMessage(text, type) {
        message.textContent = text;
        message.classList.remove("success", "error");
        message.classList.add(type);
    }

    async function simulateForgotPassword(email) {
        // Simulación de solicitud al servidor (reemplazar con una llamada AJAX real)
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulación de respuesta del servidor
                if (email === "usuario@example.com") {
                    resolve({ success: true });
                } else {
                    resolve({ success: false });
                }
            }, 1000);
        });
    }
});
