const libraryKey = `movieLibrary`;
const addBtn = document.querySelectorAll(`.add-rmv-btn`);

let addMovie = {
  title,
  movieName,
  rating,
  votes,
  popularity,
  genre,
  description,
};

function getLibrary() {
  const library = localStorage.getItem(libraryKey);
  return library ? JSON.parse(library) : [];
}

function saveLibrary(library) {
  localStorage.setItem(libraryKey, JSON.stringify(library));
}

function addMovietoLibrary(addMovie) {
  const library = getLibrary();
  library.push(addMovie);
  saveLibrary(library);
}

function removeMovieFromLibrary(movieTitle) {
  let library = getLibrary();
  library = library.filter(m => m.title !== movieTitle);
  saveLibrary(library);
}

function isMovieInLibrary(movieTitle) {
  const library = getLibrary();
  return library.some(m => m.title === movieTitle);
}

function updateButtonText(isInLibrary) {
  if (isInLibrary) {
    addLibraryBtn.textContent = 'Remove from My Library';
  } else {
    addLibraryBtn.textContent = 'Add to my library';
  }
}

addBtn.forEach(button => {
  button.addEventListener(`click`, () => {
    const movieCard = element.closest(`.add-movie`);

    addMovie.title = movieCard.querySelector(`.add-title`).textContent;
    addMovie.movieName = movieCard.querySelector(`.add-title`).textContent;
    addMovie.rating = movieCard.querySelector(`add-rating`).textContent;
    addMovie.votes = movieCard.querySelector(`add-votes`).textContent;
    addMovie.popularity = movieCard.querySelector(`add-popularity`).textContent;
    addMovie.genre = movieCard.querySelector(`add-genre`).textContent;
    addMovie.description =
      movieCard.querySelector(`adding-description`).textContent;

    if (isMovieInLibrary(movie.title)) {
      // Film zaten kütüphanede ise kaldır
      removeMovieFromLibrary(movie.title);
      updateButtonText(false);
    } else {
      // Film kütüphanede değilse ekle
      addMovieToLibrary(movie);
      updateButtonText(true);
    }
  });
});
