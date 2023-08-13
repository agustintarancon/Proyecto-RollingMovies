
const codigo = document.getElementById("codigo")
const nombre = document.getElementById("nombre")
const categoria = document.getElementById("categoria")
const descripcion = document.getElementById("descripcion")
const pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];

// Funcion para guardar valores de los inputs
const obtenerValores = (event) => {
  event.preventDefault();

  const pelicula = {
    codigo: codigo.value,
    nombre: nombre.value.toLowerCase(),
    categoria: categoria.value,
    descripcion: descripcion.value.toLowerCase(),
  };

  //Expresiones regulares
  const codigoRegex= /^[0-9]+$/
  const nombreRegex = /^[a-zA-Z0-9\s]*$/

  //Mensajes de los inputs
  const codigoNoV = document.getElementById("codigoNoV")
  const nombreNoV = document.getElementById("nombreNoV")
  const categoriaNoV = document.getElementById("categoriaNoV")
  const descripcionNoV = document.getElementById("descripcionNoV")
  const existeCN = document.getElementById("existeCN")
  
  //codigo
  if (!codigoRegex.test(pelicula.codigo) ) {
    codigo.style.border = "2px solid red"
    codigoNoV.innerHTML = "<p class='text-danger'> Ingrese un numero por favor </p>"
    codigoNoV.style.display = "block"
    return
  } else {
    codigo.style.border = "2px solid green"
    codigoNoV.style.display = "none"
  }

  //nombre
  if (pelicula.nombre.length < 2 || !nombreRegex.test(pelicula.nombre) ) {
    nombre.style.border = "2px solid red"
    nombreNoV.innerHTML = "<p class='text-danger'> Ingrese un nombre de 2 caracteres o mas </p>"
    nombreNoV.style.display = "block"
    return
  } else {
    nombre.style.border = "2px solid green"
    nombreNoV.style.display = "none"
  }

  //categoria
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

  //guardar en el localStorage los datos

  const codigoExist = pelisGuardadas.find((user) => user.codigo === pelicula.codigo);
  const nombreExist = pelisGuardadas.find((user) => user.nombre === pelicula.nombre);

  if (codigoExist) {
    existeCN.innerHTML = "<p class='text-danger'> Ya existe una pelicula con el mismo codigo </p>"
    descripcionNoV.style.display = "block"
    return
  } else {
    descripcionNoV.style.display = "none"
  }


  if (nombreExist) {
    existeCN.innerHTML = "<p class='text-danger'> Ya existe una pelicula con el mismo nombre </p>"
    descripcionNoV.style.display = "block"
    return
  } else {
    descripcionNoV.style.display = "none"
  }

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

    for (const key in pelicula) {
      if (pelicula.hasOwnProperty(key)) {
        const valor = pelicula[key];

        const td = document.createElement("td");
        td.textContent = valor;
        tr.appendChild(td);
      }
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const opciones = document.createElement("td");
    opciones.innerHTML = `
      <button class="botonEliminar" type="button"><i class="bi bi-trash3"></i></button>
      <button type="button"><i class="bi bi-pencil-square"></i></button>
      <button type="button"><i class="bi bi-star"></i></button>
    `;

    const td1 = document.createElement("td");
    td1.appendChild(checkbox);

    tr.appendChild(td1);
    tr.appendChild(opciones);

    tbody.appendChild(tr);
  });

}

// Llamada inicial para cargar las películas guardadas al cargar la página

  actualizarTabla(pelisGuardadas);

