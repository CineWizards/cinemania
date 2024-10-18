document.addEventListener('DOMContentLoaded', function () {
  const trailerButtons = document.querySelectorAll('.trailer-btn');

  trailerButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          const trailerExists = button.getAttribute('data-trailer');
          const buttonState = button.getAttribute('data-state') || 'error'; // Default to 'error'

          // Toggle the button state
          button.setAttribute('data-state', buttonState === 'error' ? 'video' : 'error');

          if (buttonState === 'error') {
              // No trailer available, show error popup
              const errorMessage = `
                  <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; height: 100%; background-color: black; color: white; text-align: left; padding: 20px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/3094/3094840.png" alt="Camera Rolling Icon" style="width: 100px; margin-bottom: 20px;">
                      <h2 style="font-size: 3rem; margin-bottom: 10px;">OOPS...</h2>
                      <p style="font-size: 2rem;">We are very sorry! But we couldn’t find the trailer.</p>
                  </div>
              `;

              openPopup(errorMessage);
          } else {
              // Trailer exists, display the trailer in a modal or popup
              const iframeHTML = `
                  <iframe width="560" height="315" 
                  src="https://www.youtube.com/embed/IAdCsNtEuBU?si=5zE_DMVmJU16oWY4" 
                  title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                  picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen></iframe>`;

              openPopup(iframeHTML);
          }
      });
  });

  // Function to open a popup window with the provided content
  function openPopup(content) {
      const popupWindow = window.open('', '_blank', 'width=600,height=400');
      popupWindow.document.write(`
          <html>
              <head>
                  <title>Trailer</title>
                  <style>
                      body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
                  </style>
              </head>
              <body>
                  ${content}
              </body>
          </html>
      `);
      popupWindow.document.close();
  }
});
