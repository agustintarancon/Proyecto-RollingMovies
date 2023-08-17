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


const carruselTendencias = document.getElementById("carruselTendencias"); 
const carruselComedia = document.getElementById("carruselComedia")
const carruselTerror = document.getElementById("carruselTerror"); 
const carruselSeries = document.getElementById("carruselSeries")

const pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];

(function load() {

  pelisGuardadas.forEach(pelicula => {
    
    for (const key in pelicula) {
      if (pelicula.hasOwnProperty(key) && key === 'link') {
        const valor = pelicula[key];

          // Crear el elemento div
          const divElement = document.createElement("div");
          divElement.classList = "swiper-slide"
          // Crear el elemento imagen
          const imagenElement = document.createElement("img");
          imagenElement.src = pelicula.link; // Reemplaza esto con la URL de la imagen
          imagenElement.classList = "imgPelicula" 
          // Crear el enlace

          const enlaceElement = document.createElement("a");

          if (pelicula.nombre === "el pacto") {
            enlaceElement.href = "../pages/detalle.html"; // URL del enlace
          } else {
            enlaceElement.href = "../pages/404.html"; //URL del enlace
          }
          enlaceElement.appendChild(imagenElement); // Agregar la imagen al enlace

          // Agregar el enlace al div
          divElement.appendChild(enlaceElement);

          // Agregar el div al cuerpo del documento (puedes cambiar document.body por el elemento donde quieras agregarlo)
          if (pelicula.categoria === "accion") {
            carruselTendencias.appendChild(divElement);
          } else if (pelicula.categoria === "comedia"){
            carruselComedia.appendChild(divElement);
          } else if (pelicula.categoria === "series"){
            carruselSeries.appendChild(divElement);
          } else if (pelicula.categoria === "terror"){
            carruselTerror.appendChild(divElement);
          }

      }
    }


  });

})()        
 



const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",

  direction: "horizontal",
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



