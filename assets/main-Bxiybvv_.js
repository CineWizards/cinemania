(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();async function c(n){const e=`https://api.themoviedb.org/3/trending/movie/day?filter=${n}&api_key=f7b35a6831dd791ecabf3c844be80c1e`;try{const r=await fetch(e);if(!r.ok)throw new Error(`API hatası: ${r.status}`);const a=(await r.json()).results.slice(0,3);d(a)}catch(r){console.error("Film verisi alınırken bir hata oluştu:",r)}}function d(n){const o=document.querySelector(".card-container");o.innerHTML="",n.forEach(e=>{const r=`https://image.tmdb.org/t/p/w500${e.poster_path}`,t=document.createElement("div");t.className="card",t.innerHTML=`
            <img src="${r}" alt="${e.title}">
            <div class="card-info">
                <h3>${e.title}</h3>
                <p>${s(e.genre_ids)} | ${u(e.release_date)}</p>
                <div class="rating">${l(e.vote_average)}</div>
            </div>
        `,o.appendChild(t)})}function l(n){const o="★".repeat(Math.floor(n/2)),e="☆".repeat(5-Math.floor(n/2));return o+e}function u(n){const o={year:"numeric",month:"long",day:"numeric"};return new Date(n).toLocaleDateString(void 0,o)}c("sci-fi");async function p(n){const e=`https://api.themoviedb.org/3/movie/upcoming?filter=${n}&api_key=f7b35a6831dd791ecabf3c844be80c1e`;try{const r=await fetch(e);if(!r.ok)throw new Error(`API hatası: ${r.status}`);const a=(await r.json()).results.slice(0,3);m(a)}catch(r){console.error("Film verisi alınırken bir hata oluştu:",r)}}function m(n){const o=document.querySelector(".upcomingContainer");o.innerHTML="",n.forEach(e=>{const r=document.createElement("div");r.className="movieCard";const t=`https://image.tmdb.org/t/p/w500${e.poster_path}`;r.innerHTML=`
            <img src="${t}" alt="${e.title}" class="moviePoster" width="" height="">
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
        `,o.appendChild(r)})}function h(n){const o={year:"numeric",month:"long",day:"numeric"};return new Date(n).toLocaleDateString(void 0,o)}function s(n){const o={28:"Action",35:"Comedy",18:"Drama",27:"Horror"};return n.map(e=>o[e]).join(", ")}p("action");document.querySelector(".about-link").addEventListener("click",()=>{document.querySelector(".about").classList.remove("hidden"),document.querySelector("header").classList.add("hidden"),document.querySelector("main").classList.add("hidden"),document.querySelector(".footer-container").classList.add("hidden")});document.querySelector(".about-x").addEventListener("click",()=>{document.querySelector(".about").classList.add("hidden"),document.querySelector("header").classList.remove("hidden"),document.querySelector("main").classList.remove("hidden"),document.querySelector(".footer-container").classList.remove("hidden")});
//# sourceMappingURL=main-Bxiybvv_.js.map
