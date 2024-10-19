// Trends API
async function getWeeklyTrendingMovies(filter) {
    const apiKey = 'f7b35a6831dd791ecabf3c844be80c1e';
    const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API hatası: ${response.status}`);
        }

        const data = await response.json();
        let movies = data.results;

        // Eğer filtre varsa, filmleri bu türe göre filtrele
        if (filter) {
            movies = movies.filter(movie => {
                const genreNames = getGenresMovies(movie.genre_ids);
                return genreNames.toLowerCase().includes(filter.toLowerCase());
            });
        }

        // İlk 3 filmi al
        movies = movies.slice(0, 3);

        // Filmleri HTML'de göster
        renderTrendingMovies(movies);
    } catch (error) {
        console.error("Film verisi alınırken bir hata oluştu:", error);
    }
}

function renderTrendingMovies(movies) {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = ''; // Önceki içeriği temizle

    movies.forEach(movie => {
        // Resim URL'sini oluştur
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        // Film kartını oluştur
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${imageUrl}" alt="${movie.title}">
            <div class="card-info">
                <h3>${movie.title}</h3>
                <p>${getGenresMovies(movie.genre_ids)} | ${formatMovieDate(movie.release_date)}</p>
                <div class="rating">${getStarRating(movie.vote_average)}</div>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

// Derecelendirme yıldızlarını gösteren yardımcı fonksiyon
function getStarRating(rating) {
    const fullStars = '★'.repeat(Math.floor(rating / 2));
    const emptyStars = '☆'.repeat(5 - Math.floor(rating / 2));
    return fullStars + emptyStars;
}

// Genre ID'lerini türe çeviren fonksiyon
function getGenresMovies(genreIds) {
    const genreMap = {
        28: "Action",
        35: "Comedy",
        18: "Drama",
        27: "Horror",
        878: "Sci-Fi",
        12: "Adventure",
        10749: "Romance",
    };
    const genres = genreIds
    .map(id => genreMap[id])
    .filter(Boolean); 

    return genres.join(', ');
}

// Tarihi okunabilir formata çeviren yardımcı fonksiyon
function formatMovieDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, options);
}
// Filtreye göre filmleri çek
getWeeklyTrendingMovies('comedy');

// Upcoming API
async function getUpcomingMovies(filter) {
    const apiKey = 'f7b35a6831dd791ecabf3c844be80c1e'; 
    const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?filter=${filter}&api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API hatası: ${response.status}`);
        }

        const data = await response.json();
        const movies = data.results.slice(0, 3); // İlk 3 filmi al

        // Filmleri HTML'de göster
        renderUpcomingMovies(movies);
    } catch (error) {
        console.error("Film verisi alınırken bir hata oluştu:", error);
    }
}

function renderUpcomingMovies(movies) {
    const upcomingContainer = document.querySelector('.upcomingContainer');
    upcomingContainer.innerHTML = ''; // Önceki içeriği temizle

    movies.forEach(movie => {
        // Film kartını oluştur
        const movieCard = document.createElement('div');
        movieCard.className = 'movieCard';

        // Tam resim URL'sini oluştur (örnek: TMDb için)
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        movieCard.innerHTML = `
            <img src="${imageUrl}" alt="${movie.title}" class="moviePoster" width="" height="">
            <div class="movieDetails">
                <div class="movieTitle">
                    <h2 class="movieTitle">${movie.title}</h2>
                </div>
                <div class="movieDetailsContainer">
                    <div class="movieDetailsTitles">
                        <h1>Release date</h1>
                        <h1>Vote / Votes</h1>
                        <h1>Popularity</h1>
                        <h1>Genre</h1>
                        <h1><br />ABOUT</h1>
                    </div>
                    <div class="movieDetailsDescription">
                        <p class="releaseDate">${formatDate(movie.release_date)}</p>
                        <p class="votes"><span class="rating">${movie.vote_average}</span> / <span class="total-votes">${movie.vote_count}</span></p>
                        <p class="popularity"><span>${movie.popularity}</span></p>
                        <p class="genre">${getGenres(movie.genre_ids)}</p>
                    </div>
                </div>
                <div class="movieDetailsAbout">
                    <p class="description">
                        ${movie.overview}
                    </p>
                </div>
                <button class="add-library-btn">Add to my library</button>
            </div>
        `;

        upcomingContainer.appendChild(movieCard);
    });
}

// Yardımcı fonksiyonlar
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, options);
}

function getGenres(genreIds) {
    const genreMap = {
        28: "Action",
        35: "Comedy",
        18: "Drama",
        27: "Horror",
    };
    
    return genreIds.map(id => genreMap[id]).join(', ');
}


getUpcomingMovies('action');
