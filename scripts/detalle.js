const autenticUsers = localStorage.getItem("authUser")
const autenticAdmins =localStorage.getItem("authadmin");

const adminLink = document.getElementById("admin")
const cerrarSes = document.getElementById("cerrarSes")

if (!autenticUsers && !autenticAdmins) {
  window.location.href = "http://127.0.0.1:5501/pages/login.html"
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