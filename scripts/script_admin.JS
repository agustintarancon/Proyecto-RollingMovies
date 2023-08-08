// Obtener los datos del formulario y agregar la película a la lista
document.getElementById("movieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var title = document.getElementById("title").value;
    var genre = document.getElementById("genre").value;
    var releaseYear = document.getElementById("releaseYear").value;
    var image = document.getElementById("image").value;
    var youtubeLink = document.getElementById("youtubeLink").value;

    // Crear elementos HTML para mostrar la película en la lista
    var li = document.createElement("li");
    var movieInfo = document.createElement("div");
    var titleElement = document.createElement("h3");
    var genreElement = document.createElement("p");
    var releaseYearElement = document.createElement("p");
    var imageElement = document.createElement("img");
    var youtubeElement = document.createElement("iframe");

    // Establecer los valores de los elementos
    titleElement.textContent = title;
    genreElement.textContent = "Género: " + genre;
    releaseYearElement.textContent = "Año de lanzamiento: " + releaseYear;
    imageElement.src = image;
    youtubeElement.src = youtubeLink;

    // Agregar los elementos al DOM
    movieInfo.appendChild(titleElement);
    movieInfo.appendChild(genreElement);
    movieInfo.appendChild(releaseYearElement);
    li.appendChild(movieInfo);
    li.appendChild(imageElement);
    li.appendChild(youtubeElement);
    document.getElementById("movieList").appendChild(li);

    // Limpiar los valores del formulario
    document.getElementById("title").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("releaseYear").value = "";
    document.getElementById("image").value = "";
    document.getElementById("youtubeLink").value = "";
});
