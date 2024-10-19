(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();async function c(r){const e="https://api.themoviedb.org/3/trending/movie/day?api_key=f7b35a6831dd791ecabf3c844be80c1e";try{const o=await fetch(e);if(!o.ok)throw new Error(`API hatası: ${o.status}`);let i=(await o.json()).results;r&&(i=i.filter(a=>s(a.genre_ids).toLowerCase().includes(r.toLowerCase()))),i=i.slice(0,3),d(i)}catch(o){console.error("Film verisi alınırken bir hata oluştu:",o)}}function d(r){const t=document.querySelector(".card-container");t.innerHTML="",r.forEach(e=>{const o=`https://image.tmdb.org/t/p/w500${e.poster_path}`,n=document.createElement("div");n.className="card",n.innerHTML=`
            <img src="${o}" alt="${e.title}">
            <div class="card-info">
                <h3>${e.title}</h3>
                <p>${s(e.genre_ids)} | ${u(e.release_date)}</p>
                <div class="rating">${l(e.vote_average)}</div>
            </div>
        `,t.appendChild(n)})}function l(r){const t="★".repeat(Math.floor(r/2)),e="☆".repeat(5-Math.floor(r/2));return t+e}function s(r){const t={28:"Action",35:"Comedy",18:"Drama",27:"Horror",878:"Sci-Fi",12:"Adventure",10749:"Romance"};return r.map(o=>t[o]).filter(Boolean).join(", ")}function u(r){const t={year:"numeric",month:"long",day:"numeric"};return new Date(r).toLocaleDateString(void 0,t)}c("comedy");async function m(r){const e=`https://api.themoviedb.org/3/movie/upcoming?filter=${r}&api_key=f7b35a6831dd791ecabf3c844be80c1e`;try{const o=await fetch(e);if(!o.ok)throw new Error(`API hatası: ${o.status}`);const i=(await o.json()).results.slice(0,3);p(i)}catch(o){console.error("Film verisi alınırken bir hata oluştu:",o)}}function p(r){const t=document.querySelector(".upcomingContainer");t.innerHTML="",r.forEach(e=>{const o=document.createElement("div");o.className="movieCard";const n=`https://image.tmdb.org/t/p/w500${e.poster_path}`;o.innerHTML=`
            <img src="${n}" alt="${e.title}" class="moviePoster" width="" height="">
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
                        <p class="genre">${g(e.genre_ids)}</p>
                    </div>
                </div>
                <div class="movieDetailsAbout">
                    <p class="description">
                        ${e.overview}
                    </p>
                </div>
                <button class="add-library-btn">Add to my library</button>
            </div>
        `,t.appendChild(o)})}function h(r){const t={year:"numeric",month:"long",day:"numeric"};return new Date(r).toLocaleDateString(void 0,t)}function g(r){const t={28:"Action",35:"Comedy",18:"Drama",27:"Horror"};return r.map(e=>t[e]).join(", ")}m("action");document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("modeToggle"),t=document.body;console.log("Script çalıştı, buton durumu:",r.checked);const e=localStorage.getItem("mode");e&&(t.classList.toggle("lightmode",e==="light"),r.checked=e==="light"),r.addEventListener("change",function(){r.checked?(t.classList.add("lightmode"),localStorage.setItem("mode","light")):(t.classList.remove("lightmode"),localStorage.setItem("mode","dark"))})});document.querySelector(".about-link").addEventListener("click",()=>{document.querySelector(".about").classList.remove("hidden"),document.querySelector("header").classList.add("hidden"),document.querySelector("main").classList.add("hidden"),document.querySelector(".footer-container").classList.add("hidden")});document.querySelector(".about-x").addEventListener("click",()=>{document.querySelector(".about").classList.add("hidden"),document.querySelector("header").classList.remove("hidden"),document.querySelector("main").classList.remove("hidden"),document.querySelector(".footer-container").classList.remove("hidden")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".trailer-btn").forEach(function(e){e.addEventListener("click",function(){e.getAttribute("data-trailer");const o=e.getAttribute("data-state")||"error";e.setAttribute("data-state",o==="error"?"video":"error"),t(o==="error"?`
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
                  allowfullscreen></iframe>`)})});function t(e){const o=window.open("","_blank","width=600,height=400");o.document.write(`
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
      `),o.document.close()}});
//# sourceMappingURL=main-DKNYe8Bm.js.map
