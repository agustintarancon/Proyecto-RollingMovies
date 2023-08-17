const autenticUsers = localStorage.getItem("authUser")
const autenticAdmins =localStorage.getItem("authadmin");

const adminLink = document.getElementById("admin")
const cerrarSes = document.getElementById("cerrarSes")

if (!autenticUsers && !autenticAdmins) {
  window.location.href = "../pages/login.html"
} 

if (autenticAdmins) {
  adminLink.style.display = "inline"
} else {
  adminLink.style.display = "none"
}

const cerrarSesion = () => {
  localStorage.removeItem("authUser");
  localStorage.removeItem("authadmin");
}