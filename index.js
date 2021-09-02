const message = document.querySelector("aside");
console.log("Hello World");

function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);
  movieTitle.addEventListener("click", crossOffMovie);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);
  const ulElement = document.querySelector("ul");
  ulElement.appendChild(movie);
  inputField.value = "";
}

document.querySelector("form").addEventListener("submit", addMovie);

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie deleted! It sucked anyway";
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")){
     message.textContent = "Movie Watched"
  } else {
      message.textContent = "Movie Added Back"
  }
}
