const codigo = document.getElementById("codigo")
const nombre = document.getElementById("nombre")
const categoria = document.getElementById("categoria")
const descripcion = document.getElementById("descripcion")

//Funcion para guardar valores de los inputs
const obtenerValores = (event) => {
  event.preventDefault()
  const pelicula = {
    codigo: codigo.value,
    nombre: nombre.value.toLowerCase(),
    categoria: categoria.value,
    descripcion: descripcion.value.toLowerCase(),
  };

  console.log(pelicula.codigo)
  //Expresiones regulares
  const codigoRegex= /^[0-9]+$/
  const nombreRegex = /^[a-zA-Z0-9\s]*$/
  //Mensajes de los inputs
  const codigoNoV = document.getElementById("codigoNoV")
  const nombreNoV = document.getElementById("nombreNoV")
  const categoriaNoV = document.getElementById("categoriaNoV")
  const descripcionNoV = document.getElementById("descripcionNoV")

  //Validaciones
  if (!codigoRegex.test(pelicula.codigo) ) {
    codigo.style.border = "1px solid red"
   codigoNoV.innerHTML = "<p class='text-danger'> Ingrese un numero por favor </p>"
   codigoNoV.style.display = "block"
  } else {
    codigo.style.border = "1px solid green"
    codigoNoV.style.display = "none"
  }

  if (pelicula.nombre.length < 2) {
    nombre.style.border = "1px solid red"
    nombreNoV.innerHTML = "<p class='text-danger'> Ingrese un nombre de 2 caracteres o mas </p>"
    nombreNoV.style.display = "block"
  } else if (!nombreRegex.test(pelicula.nombre)){
    nombre.style.border = "1px solid red"
    nombreNoV.innerHTML = "<p class='text-danger'> No se permiten caracteres especiales </p>"
    nombreNoV.style.display = "block"
  } else {
    nombre.style.border = "1px solid green"
    nombreNoV.style.display = "none"
  }
 
  if (pelicula.categoria === "Categorias") {
    categoria.style.border = "1px solid red"
    categoriaNoV.innerHTML = "<p class='text-danger'> Elija una categoria </p>"
    categoriaNoV.style.display = "block"
  } else {
    categoria.style.border = "1px solid green"
    categoriaNoV.style.display = "none"
  }

  if (pelicula.descripcion.length < 10 ) {
    descripcion.style.border = "1px solid red"
    descripcionNoV.innerHTML = "<p class='text-danger'> Ingrese una descripcion de almenos 10 caracteres </p>"
    descripcionNoV.style.display = "block"
  } else if (!nombreRegex.test(pelicula.descripcion)) {
    descripcion.style.border = "1px solid red"
    descripcionNoV.innerHTML = "<p class='text-danger'> No se permiten caracteres especiales </p>"
    descripcionNoV.style.display = "block"
  } else {
    descripcion.style.border = "1px solid green"
    descripcionNoV.style.display = "none"
  }


  //Condicional para cerrar el modal
  if (
    codigoNoV.style.display === "none" &&
    nombreNoV.style.display === "none" &&
    categoriaNoV.style.display === "none" &&
    descripcionNoV.style.display === "none"
  ) {
    const botonCierreModal = document.getElementById("cerrar");
    botonCierreModal.click();
    form.reset();
  }
}


