(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();async function c(i){const e=`https://api.themoviedb.org/3/trending/movie/day?filter=${i}&api_key=f7b35a6831dd791ecabf3c844be80c1e`;try{const t=await fetch(e);if(!t.ok)throw new Error(`API hatası: ${t.status}`);const n=(await t.json()).results.slice(0,3);d(n)}catch(t){console.error("Film verisi alınırken bir hata oluştu:",t)}}function d(i){const o=document.querySelector(".card-container");o.innerHTML="",i.forEach(e=>{const t=`https://image.tmdb.org/t/p/w500${e.poster_path}`,r=document.createElement("div");r.className="card",r.innerHTML=`
            <img src="${t}" alt="${e.title}">
            <div class="card-info">
                <h3>${e.title}</h3>
                <p>${s(e.genre_ids)} | ${u(e.release_date)}</p>
                <div class="rating">${l(e.vote_average)}</div>
            </div>
        `,o.appendChild(r)})}function l(i){const o="★".repeat(Math.floor(i/2)),e="☆".repeat(5-Math.floor(i/2));return o+e}function u(i){const o={year:"numeric",month:"long",day:"numeric"};return new Date(i).toLocaleDateString(void 0,o)}c("sci-fi");async function p(i){const e=`https://api.themoviedb.org/3/movie/upcoming?filter=${i}&api_key=f7b35a6831dd791ecabf3c844be80c1e`;try{const t=await fetch(e);if(!t.ok)throw new Error(`API hatası: ${t.status}`);const n=(await t.json()).results.slice(0,3);m(n)}catch(t){console.error("Film verisi alınırken bir hata oluştu:",t)}}function m(i){const o=document.querySelector(".upcomingContainer");o.innerHTML="",i.forEach(e=>{const t=document.createElement("div");t.className="movieCard";const r=`https://image.tmdb.org/t/p/w500${e.poster_path}`;t.innerHTML=`
            <img src="${r}" alt="${e.title}" class="moviePoster" width="" height="">
            <div class="movieDetails">
                <div class="movieTitle">
                    <h2 class="movieTitle">${e.title}</h2>
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
                        <p class="releaseDate">${h(e.release_date)}</p>
                        <p class="votes"><span class="rating">${e.vote_average}</span> / <span class="total-votes">${e.vote_count}</span></p>
                        <p class="popularity"><span>${e.popularity}</span></p>
                        <p class="genre">${s(e.genre_ids)}</p>
                    </div>
                </div>
                <div class="movieDetailsAbout">
                    <p class="description">
                        ${e.overview}
                    </p>
                </div>
                <button class="add-library-btn">Add to my library</button>
            </div>
        `,o.appendChild(t)})}function h(i){const o={year:"numeric",month:"long",day:"numeric"};return new Date(i).toLocaleDateString(void 0,o)}function s(i){const o={28:"Action",35:"Comedy",18:"Drama",27:"Horror"};return i.map(e=>o[e]).join(", ")}p("action");document.querySelector(".about-link").addEventListener("click",()=>{document.querySelector(".about").classList.remove("hidden"),document.querySelector("header").classList.add("hidden"),document.querySelector("main").classList.add("hidden"),document.querySelector(".footer-container").classList.add("hidden")});document.querySelector(".about-x").addEventListener("click",()=>{document.querySelector(".about").classList.add("hidden"),document.querySelector("header").classList.remove("hidden"),document.querySelector("main").classList.remove("hidden"),document.querySelector(".footer-container").classList.remove("hidden")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".trailer-btn").forEach(function(e){e.addEventListener("click",function(){e.getAttribute("data-trailer");const t=e.getAttribute("data-state")||"error";e.setAttribute("data-state",t==="error"?"video":"error"),o(t==="error"?`
                  <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; height: 100%; background-color: black; color: white; text-align: left; padding: 20px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/3094/3094840.png" alt="Camera Rolling Icon" style="width: 100px; margin-bottom: 20px;">
                      <h2 style="font-size: 3rem; margin-bottom: 10px;">OOPS...</h2>
                      <p style="font-size: 2rem;">We are very sorry! But we couldn’t find the trailer.</p>
                  </div>
              `:`
                  <iframe width="560" height="315" 
                  src="https://www.youtube.com/embed/IAdCsNtEuBU?si=5zE_DMVmJU16oWY4" 
                  title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                  picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen></iframe>`)})});function o(e){const t=window.open("","_blank","width=600,height=400");t.document.write(`
          <html>
              <head>
                  <title>Trailer</title>
                  <style>
                      body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
                  </style>
              </head>
              <body>
                  ${e}
              </body>
          </html>
      `),t.document.close()}});
//# sourceMappingURL=main-Dyl-ujuj.js.map
