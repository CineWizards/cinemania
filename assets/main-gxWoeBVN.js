(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();async function p(t){const e="https://api.themoviedb.org/3/trending/movie/day?api_key=f7b35a6831dd791ecabf3c844be80c1e";try{const r=await fetch(e);if(!r.ok)throw new Error(`API hatası: ${r.status}`);let n=(await r.json()).results;t&&(n=n.filter(a=>l(a.genre_ids).toLowerCase().includes(t.toLowerCase()))),n=n.slice(0,3),f(n)}catch(r){console.error("Film verisi alınırken bir hata oluştu:",r)}}function f(t){const o=document.querySelector(".card-container");o.innerHTML="",t.forEach(e=>{const r=`https://image.tmdb.org/t/p/w500${e.poster_path}`,i=document.createElement("div");i.className="card",i.innerHTML=`
            <img src="${r}" alt="${e.title}">
            <div class="card-info">
                <h3>${e.title}</h3>
                <p>${l(e.genre_ids)} | ${y(e.release_date)}</p>
                <div class="rating">${g(e.vote_average)}</div>
            </div>
        `,o.appendChild(i)})}function g(t){const o="★".repeat(Math.floor(t/2)),e="☆".repeat(5-Math.floor(t/2));return o+e}function l(t){const o={28:"Action",35:"Comedy",18:"Drama",27:"Horror",878:"Sci-Fi",12:"Adventure",10749:"Romance"};return t.map(r=>o[r]).filter(Boolean).join(", ")}function y(t){const o={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString(void 0,o)}p("comedy");async function h(t){const e=`https://api.themoviedb.org/3/movie/upcoming?filter=${t}&api_key=f7b35a6831dd791ecabf3c844be80c1e`;try{const r=await fetch(e);if(!r.ok)throw new Error(`API hatası: ${r.status}`);const n=(await r.json()).results.slice(0,3);v(n)}catch(r){console.error("Film verisi alınırken bir hata oluştu:",r)}}function v(t){const o=document.querySelector(".upcomingContainer");o.innerHTML="",t.forEach(e=>{const r=document.createElement("div");r.className="movieCard";const i=`https://image.tmdb.org/t/p/w500${e.poster_path}`;r.innerHTML=`
            <img src="${i}" alt="${e.title}" class="moviePoster" width="" height="">
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
                        <p class="releaseDate">${b(e.release_date)}</p>
                        <p class="votes"><span class="rating">${e.vote_average}</span> / <span class="total-votes">${e.vote_count}</span></p>
                        <p class="popularity"><span>${e.popularity}</span></p>
                        <p class="genre">${S(e.genre_ids)}</p>
                    </div>
                </div>
                <div class="movieDetailsAbout">
                    <p class="description">
                        ${e.overview}
                    </p>
                </div>
                <button class="add-library-btn">Add to my library</button>
            </div>
        `,o.appendChild(r)})}function b(t){const o={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString(void 0,o)}function S(t){const o={28:"Action",35:"Comedy",18:"Drama",27:"Horror"};return t.map(e=>o[e]).join(", ")}h("action");document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("modeToggle"),o=document.body;console.log("Script çalıştı, buton durumu:",t.checked);const e=localStorage.getItem("mode");e&&(o.classList.toggle("lightmode",e==="light"),t.checked=e==="light"),t.addEventListener("change",function(){t.checked?(o.classList.add("lightmode"),localStorage.setItem("mode","light")):(o.classList.remove("lightmode"),localStorage.setItem("mode","dark"))})});let L=1,s=[];const w="f7b35a6831dd791ecabf3c844be80c1e",M=`https://api.themoviedb.org/3/trending/movie/week?api_key=${w}&page=${L}`;async function $(t){s=(await(await fetch(M)).json()).results,d()}$();function d(){document.querySelector(".movie1-movielist").innerHTML="",console.log(s),s.forEach(t=>{const o=`https://image.tmdb.org/t/p/w500${t.poster_path}`,e=document.createElement("div");e.className="movie1-movielist_container",e.innerHTML=`
      <img src="${o}" alt="${t.title}" class="movie1-movielist_card_img">

            <div class="movie1-movielist_card_details">
                <h3 class="movie1-movielist_card_title">${t.title}</h3>
                <div class="movie1-movielist_card_info">
                    <p class="movie1-movielist_card_genre">
                        <span class="movielist-genre">${C(t.genre_ids)}</span>
                        |
                        <span class="movielist-year">${q(t.release_date)}</span>
                    </p>
                    <div class="movie1-movielist_card_rating">${_(t.vote_average)}</div>
                </div>
            </div>`,document.querySelector(".movie1-movielist").appendChild(e)})}d();function _(t){const o=Math.floor(t/2),e=t%2===1?1:0,r=5-o-e,i='<i class="fa-solid fa-star"></i>'.repeat(o),n='<i class="fa-solid fa-star-half-stroke"></i>'.repeat(e),a='<i class="fa-regular fa-star"></i>'.repeat(r);return i+n+a}function C(t){const o={28:"Action",35:"Comedy",18:"Drama",27:"Horror",878:"Sci-Fi",12:"Adventure",10749:"Romance"};return t.map(e=>o[e]).join(", ")}function q(t){const o={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString(void 0,o)}document.querySelector(".about-link").addEventListener("click",()=>{document.querySelector(".about").classList.remove("hidden"),document.querySelector("header").classList.add("hidden"),document.querySelector("main").classList.add("hidden"),document.querySelector(".footer-container").classList.add("hidden")});document.querySelector(".about-x").addEventListener("click",()=>{document.querySelector(".about").classList.add("hidden"),document.querySelector("header").classList.remove("hidden"),document.querySelector("main").classList.remove("hidden"),document.querySelector(".footer-container").classList.remove("hidden")});const u="movieLibrary",D=document.querySelectorAll(".add-rmv-btn");title,movieName,rating,votes,popularity,genre,description;function m(){const t=localStorage.getItem(u);return t?JSON.parse(t):[]}function E(t){localStorage.setItem(u,JSON.stringify(t))}function x(t){let o=m();o=o.filter(e=>e.title!==t),E(o)}function T(t){return m().some(e=>e.title===t)}function c(t){t?addLibraryBtn.textContent="Remove from My Library":addLibraryBtn.textContent="Add to my library"}D.forEach(t=>{t.addEventListener("click",()=>{const o=element.closest(".add-movie");o.querySelector(".add-title").textContent,o.querySelector(".add-title").textContent,o.querySelector("add-rating").textContent,o.querySelector("add-votes").textContent,o.querySelector("add-popularity").textContent,o.querySelector("add-genre").textContent,o.querySelector("adding-description").textContent,T(movie.title)?(x(movie.title),c(!1)):(addMovieToLibrary(movie),c(!0))})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".trailer-btn").forEach(function(e){e.addEventListener("click",function(){e.getAttribute("data-trailer");const r=e.getAttribute("data-state")||"error";e.setAttribute("data-state",r==="error"?"video":"error"),o(r==="error"?`
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
                  allowfullscreen></iframe>`)})});function o(e){const r=window.open("","_blank","width=600,height=400");r.document.write(`
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
      `),r.document.close()}});
//# sourceMappingURL=main-gxWoeBVN.js.map
