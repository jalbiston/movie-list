console.log("Hello World");

function addMovie(event) {
  event.preventDefault()
  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "X"
  deleteBtn.addEventListener("click", deleteMovie)
  movie.appendChild(deleteBtn)
  const ulElement = document.querySelector("ul");
  ulElement.appendChild(movie);
  inputField.value = ""
}


document.querySelector("form").addEventListener("submit", addMovie);

function deleteMovie(event){
    event.target.parentNode.remove()  
}
