let currentPage = 1;
let movies = [];
const apiKey = 'f7b35a6831dd791ecabf3c844be80c1e';
const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=${currentPage}`;

async function fetchMovies(filter) {
  const response = await fetch(apiUrl);

  const data = await response.json();

  movies = data.results;

  displayMovies();
}
fetchMovies();

function displayMovies() {
  document.querySelector('.movie1-movielist').innerHTML = '';

  console.log(movies);
  movies.forEach(movie => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const newItem = document.createElement('div');
    newItem.className = 'movie1-movielist_container';
    newItem.innerHTML = `
      <img src="${imageUrl}" alt="${
      movie.title
    }" class="movie1-movielist_card_img">

            <div class="movie1-movielist_card_details">
                <h3 class="movie1-movielist_card_title">${movie.title}</h3>
                <div class="movie1-movielist_card_info">
                    <p class="movie1-movielist_card_genre">
                        <span class="movielist-genre">${getGenresMovies(
                          movie.genre_ids
                        )}</span>
                        |
                        <span class="movielist-year">${formatMovieDate(
                          movie.release_date
                        )}</span>
                    </p>
                    <div class="movie1-movielist_card_rating">${getStarRating(
                      movie.vote_average
                    )}</div>
                </div>
            </div>`;
    const myDiv = document.querySelector('.movie1-movielist');
    myDiv.appendChild(newItem);
  });
}
displayMovies();
// Derecelendirme yıldızlarını gösteren yardımcı fonksiyon
function getStarRating(rating) {
  const fullStarsCount = Math.floor(rating / 2);
  const halfStarsCount = rating % 2 === 1 ? 1 : 0; // Yarım yıldız durumu
  const emptyStarsCount = 5 - fullStarsCount - halfStarsCount;

  const fullStars = '<i class="fa-solid fa-star"></i>'.repeat(fullStarsCount);
  const halfStars = '<i class="fa-solid fa-star-half-stroke"></i>'.repeat(
    halfStarsCount
  );
  const emptyStars = '<i class="fa-regular fa-star"></i>'.repeat(
    emptyStarsCount
  );

  return fullStars + halfStars + emptyStars;
}

// Genre ID'lerini türe çeviren fonksiyon
function getGenresMovies(genreIds) {
  const genreMap = {
    28: 'Action',
    35: 'Comedy',
    18: 'Drama',
    27: 'Horror',
    878: 'Sci-Fi',
    12: 'Adventure',
    10749: 'Romance',
    // Diğer türler eklenebilir...
  };

  return genreIds.map(id => genreMap[id]).join(', ');
}

// Tarihi okunabilir formata çeviren yardımcı fonksiyon
function formatMovieDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, options);
}
