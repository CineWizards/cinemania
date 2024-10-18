// Function to dynamically create movie cards
function createMovieCard(movie) {
    const cardContainer = document.querySelector('.card-container');
  
    // Create card element
    const card = document.createElement('div');
    card.classList.add('card');
  
    // Create and set movie image
    const img = document.createElement('img');
    img.src = movie.imageUrl;  // assuming 'imageUrl' is part of the API response
    img.alt = movie.title;
  
    // Create card info section
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
  
    // Movie title
    const title = document.createElement('h3');
    title.textContent = movie.title;
  
    // Movie genre and year
    const description = document.createElement('p');
    description.textContent = `${movie.genre} | ${movie.year}`;
  
    // Movie rating
    const rating = document.createElement('div');
    rating.classList.add('rating');
    rating.textContent = movie.rating;  // e.g., '★★★★★' or a numeric value
  
    // Trailer button
    const trailerButton = document.createElement('button');
    trailerButton.classList.add('trailer-btn');
    trailerButton.textContent = 'Watch Trailer';
    
    // Set the trailer link in the button's data attribute
    trailerButton.setAttribute('data-trailer', movie.trailerUrl); // assuming 'trailerUrl' is part of the API response
  
    // Add event listener to handle trailer opening
    trailerButton.addEventListener('click', function() {
      const trailerLink = this.getAttribute('data-trailer');
      if (trailerLink) {
        // Open trailer in popup window if available
        window.open(trailerLink, '_blank', 'width=800,height=600');
      } else {
        // Show alert if no trailer is available
        alert('Trailer not available for this movie.');
      }
    });
  
    // Append elements to card info and card
    cardInfo.appendChild(title);
    cardInfo.appendChild(description);
    cardInfo.appendChild(rating);
    cardInfo.appendChild(trailerButton);
    
    card.appendChild(img);
    card.appendChild(cardInfo);
  
    // Append card to the card container
    cardContainer.appendChild(card);
  }
  
  // Example of how you would handle the API response and create cards dynamically
  function handleApiResponse(movies) {
    movies.forEach(movie => {
      createMovieCard(movie);  // Create card for each movie returned by the API
    });
  }
  
  // Fetch movies from the API (replace 'your-api-url' with the actual API endpoint)
  fetch('your-api-url')
    .then(response => response.json())
    .then(data => {
      handleApiResponse(data.movies);  // assuming 'movies' is an array in the API response
    })
    .catch(error => console.error('Error fetching movie data:', error));
  