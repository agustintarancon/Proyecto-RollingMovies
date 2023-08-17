const autenticUsers = localStorage.getItem("authUser")
const autenticAdmins =localStorage.getItem("authadmin");

const adminLink = document.getElementById("admin")
const cerrarSes = document.getElementById("cerrarSes")

if (!autenticAdmins) {
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







const codigo = document.getElementById("codigo")
const nombre = document.getElementById("nombre")
const categoria = document.getElementById("categoria")
const descripcion = document.getElementById("descripcion")
const link = document.getElementById("link")
const pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];

actualizarTabla(pelisGuardadas);


// Funcion para guardar valores de los inputs
const obtenerValores = (event) => {
  event.preventDefault();

  const pelicula = {
    codigo: codigo.value,
    nombre: nombre.value.toLowerCase(),
    categoria: categoria.value,
    descripcion: descripcion.value.toLowerCase(),
    link: link.value,
    favorito: false
  };
  

  //Expresiones regulares
  const codigoRegex= /^[0-9]+$/
  const nombreRegex = /^[a-zA-Z0-9\s]*$/

  //Mensajes de los inputs
  const codigoNoV = document.getElementById("codigoNoV")
  const nombreNoV = document.getElementById("nombreNoV")
  const categoriaNoV = document.getElementById("categoriaNoV")
  const descripcionNoV = document.getElementById("descripcionNoV")
  const existeC = document.getElementById("existeC")
  const existeN = document.getElementById("existeN")

  //recorrer arrays para ver si existe o no
  const codigoExist = pelisGuardadas.find((user) => user.codigo === pelicula.codigo);
  const nombreExist = pelisGuardadas.find((user) => user.nombre === pelicula.nombre);
  
  //VALIDACIONES DE LOS INPUTS
  if (!codigoRegex.test(pelicula.codigo) ) {
    codigo.style.border = "2px solid red"
    codigoNoV.innerHTML = "<p class='text-danger'> Ingrese un numero por favor </p>"
    codigoNoV.style.display = "block"
    existeC.style.display = "none"
    return
  } else if (codigoExist) {
    codigo.style.border = "2px solid red"
    existeC.innerHTML = "<p class='text-danger'> Ya existe una pelicula con el mismo codigo </p>"
    codigoNoV.innerHTML = "<p class='text-danger'> Ingrese un numero por favor </p>"
    codigoNoV.style.display = "none"
    existeC.style.display = "block"
    return
  } else {
    codigo.style.border = "2px solid green"
    codigoNoV.style.display = "none"
    existeC.style.display = "none"
  }

  if (pelicula.nombre.length < 2 || !nombreRegex.test(pelicula.nombre) ) {
    nombre.style.border = "2px solid red"
    nombreNoV.innerHTML = "<p class='text-danger'> Ingrese un nombre de 2 caracteres o mas </p>"
    nombreNoV.style.display = "block"
    existeN.style.display = "none"
    return
  } else if (nombreExist) {
    nombre.style.border = "2px solid red"
    existeN.innerHTML = "<p class='text-danger'> Ya existe una pelicula con el mismo nombre </p>"
    existeN.style.display = "block"
    nombreNoV.style.display = "none"
    return
  } else {
    nombre.style.border = "2px solid green"
    nombreNoV.style.display = "none"
    existeN.style.display = "none"
  }

  if (pelicula.categoria === "Categorias") {
    categoria.style.border = "2px solid red"
    categoriaNoV.innerHTML = "<p class='text-danger'> Elija una categoria </p>"
    categoriaNoV.style.display = "block"
    return
  } else {
    categoria.style.border = "2px solid green"
    categoriaNoV.style.display = "none"
  }

  //descripcion
  if (pelicula.descripcion.length < 10 || !nombreRegex.test(pelicula.descripcion)) {
    descripcion.style.border = "2px solid red"
    descripcionNoV.innerHTML = "<p class='text-danger'> Ingrese una descripcion de almenos 10 caracteres </p>"
    descripcionNoV.style.display = "block"
    return
  } else {
    descripcion.style.border = "2px solid green"
    descripcionNoV.style.display = "none"
  }

 //volver al color original de los bordes
  nombre.style.border =  "1px solid rgba(0, 0, 0, 0.594)"
  codigo.style.border =  "1px solid rgba(0, 0, 0, 0.594)"
  descripcion.style.border =  "1px solid rgba(0, 0, 0, 0.594)"
  categoria.style.border =  "1px solid rgba(0, 0, 0, 0.594)"


  pelisGuardadas.push(pelicula);
  localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

  actualizarTabla(pelisGuardadas);

  // Simular un clic en el botón de cierre del modal
  const botonCierreModal = document.getElementById("cerrar");
  botonCierreModal.click();
  form.reset();

};



function actualizarTabla(pelisGuardadas) {
  
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; // Limpiar la tabla antes de actualizarla

  pelisGuardadas.forEach((pelicula, index) => {
    
    const tr = document.createElement("tr");
    // Recorre las propiedades de cada película
    for (const key in pelicula) {
      if (pelicula.hasOwnProperty(key) && key !== 'link' && key !== "favorito") {
        const valor = pelicula[key];
        
        // Crea una celda (td) y establece su contenido con el valor de la propiedad
        const td = document.createElement("td");
        td.textContent = valor;
        tr.appendChild(td);
      }
    }
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true; // Marcar el checkbox
    
    // Crea celdas (td) para las opciones de la película (eliminar, editar, favorito)
    const opciones = document.createElement("td");
    opciones.innerHTML = `
    <button class="botonEliminar" data-index="${index}" type="button"><i class="bi bi-trash3"></i></button>
    <button class="botonEditar" data-index="${index}" type="button"><i class="bi bi-pencil-square"></i></button>
    <button class="botonFavorito" data-index="${index}" type="button"><i class="bi bi-star"></i></button>
    `;
    
    // Crea una celda (td) para el checkbox y agrega las celdas de opciones
    const td = document.createElement("td");
    td.appendChild(checkbox);
    tr.appendChild(td);
    tr.appendChild(opciones);
    tbody.appendChild(tr);
    
  });
  
  const editarButtons = document.querySelectorAll(".botonEditar");
  editarButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      cargarValoresEdicion(pelisGuardadas[index], index);
      const modal = new bootstrap.Modal(document.getElementById("modalEditar"));
      modal.show();
    });
  });
  
  // Adjuntar oyentes de eventos de clic a los botones "Eliminar"
  const eliminarButtons = document.querySelectorAll(".botonEliminar");
  eliminarButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      eliminarFila(index);
    });
  });

}

  function eliminarFila(index) {
    pelisGuardadas.splice(index, 1); // Eliminar el elemento en el índice especificado
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));
    actualizarTabla(pelisGuardadas);

}

  //Inputs modal editar
  const codigoE = document.getElementById("codigoE")
  const nombreE = document.getElementById("nombreE")
  const categoriaE = document.getElementById("categoriaE")
  const descripcionE = document.getElementById("descripcionE")
  const linkE = document.getElementById("linkE")

  //Funcion para llenar los campos
  function cargarValoresEdicion(pelicula, index) {
    peliculaEditIndex = index; // Establece el índice aquí
    
    codigoE.value = pelicula.codigo;
    nombreE.value = pelicula.nombre;
    categoriaE.value = pelicula.categoria;
    descripcionE.value = pelicula.descripcion;
    linkE.value = pelicula.link;
}

actualizarTabla(pelisGuardadas);

  let peliculaEditIndex = -1;
  
  function editarValores(event) {
    event.preventDefault()
  
    const peliculaEditada = {
      codigo: codigoE.value,
      nombre: nombreE.value.toLowerCase(),
      categoria: categoriaE.value,
      descripcion: descripcionE.value,
      link: linkE.value
    };

    //Mensajes de los inputs
    const codigoNoV = document.getElementById("codigoNoVE")
    const nombreNoV = document.getElementById("nombreNoVE")
    const categoriaNoV = document.getElementById("categoriaNoVE")
    const descripcionNoV = document.getElementById("descripcionNoVE")

     //Expresiones regulares
    const codigoRegex= /^[0-9]+$/
    const nombreRegex = /^[a-zA-Z0-9\s]*$/

     //VALIDACIONES DE LOS INPUTS
  if (!codigoRegex.test(peliculaEditada.codigo) ) {
    codigoE.style.border = "2px solid red"
    codigoNoV.innerHTML = "<p class='text-danger'> Ingrese un numero por favor </p>"
    codigoNoV.style.display = "block"
    return
  } else {
    codigoE.style.border = "2px solid green"
    codigoNoV.style.display = "none"
  }

  if (peliculaEditada.nombre.length < 2 || !nombreRegex.test(peliculaEditada.nombre) ) {
    nombreE.style.border = "2px solid red"
    nombreNoV.innerHTML = "<p class='text-danger'> Ingrese un nombre de 2 caracteres o mas </p>"
    nombreNoV.style.display = "block"
    return
  } else {
    nombreE.style.border = "2px solid green"
    nombreNoV.style.display = "none"
  }

  if (peliculaEditada.categoria === "Categorias") {
    categoriaE.style.border = "2px solid red"
    categoriaNoV.innerHTML = "<p class='text-danger'> Elija una categoria </p>"
    categoriaNoV.style.display = "block"
    return
  } else {
    categoriaE.style.border = "2px solid green"
    categoriaNoV.style.display = "none"
  }

  //descripcion
  if (peliculaEditada.descripcion.length < 10 || !nombreRegex.test(peliculaEditada.descripcion)) {
    descripcionE.style.border = "2px solid red"
    descripcionNoV.innerHTML = "<p class='text-danger'> Ingrese una descripcion de almenos 10 caracteres </p>"
    descripcionNoV.style.display = "block"
    return
  } else {
    descripcionE.style.border = "2px solid green"
    descripcionNoV.style.display = "none"
  }

  if (peliculaEditIndex !== -1) {
    // Si hay un índice de edición válido, actualiza la película en la lista
    pelisGuardadas[peliculaEditIndex] = peliculaEditada;

    //! cargarValoresEdicion(peliculaEditada, peliculaEditIndex); SE PUEDE SACAR?
    
    // Guarda la lista actualizada en el localStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));
    
    
    //! Reinicia el índice de edición  SE PUEDE SACAR
    //! peliculaEditIndex = -1;
    
    // Limpia el formulario
    window.location.reload()
    }
  }

  const favoritoButtons = document.querySelectorAll(".botonFavorito");

  // Función para actualizar el estado de favorito y el color del botón
  function actualizarFavorito(index) {
    const pelicula = pelisGuardadas[index];
    pelicula.favorito = !pelicula.favorito;
  
    if (pelicula.favorito) {
      favoritoButtons[index].classList.add("favorito-activo");
    } else {
      favoritoButtons[index].classList.remove("favorito-activo");
    }
  
    // Guarda la información actualizada en el Local Storage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));
  }
  
  favoritoButtons.forEach((button, index) => {
    // Agrega el evento click al botón favorito
    button.addEventListener("click", () => {
      actualizarFavorito(index);
    });
  
    // Restaura el color del botón basado en el estado guardado
    if (pelisGuardadas[index]?.favorito) {
      button.classList.add("favorito-activo");
    }
  });
  