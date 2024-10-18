(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();async function u(e){const t=`https://api.themoviedb.org/3/trending/movie/day?filter=${e}&api_key=f7b35a6831dd791ecabf3c844be80c1e`;try{const n=await fetch(t);if(!n.ok)throw new Error(`API hatası: ${n.status}`);const o=(await n.json()).results.slice(0,3);p(o)}catch(n){console.error("Film verisi alınırken bir hata oluştu:",n)}}function p(e){const a=document.querySelector(".card-container");a.innerHTML="",e.forEach(t=>{const n=`https://image.tmdb.org/t/p/w500${t.poster_path}`,r=document.createElement("div");r.className="card",r.innerHTML=`
            <img src="${n}" alt="${t.title}">
            <div class="card-info">
                <h3>${t.title}</h3>
                <p>${l(t.genre_ids)} | ${h(t.release_date)}</p>
                <div class="rating">${m(t.vote_average)}</div>
            </div>
        `,a.appendChild(r)})}function m(e){const a="★".repeat(Math.floor(e/2)),t="☆".repeat(5-Math.floor(e/2));return a+t}function h(e){const a={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString(void 0,a)}u("sci-fi");async function f(e){const t=`https://api.themoviedb.org/3/movie/upcoming?filter=${e}&api_key=f7b35a6831dd791ecabf3c844be80c1e`;try{const n=await fetch(t);if(!n.ok)throw new Error(`API hatası: ${n.status}`);const o=(await n.json()).results.slice(0,3);g(o)}catch(n){console.error("Film verisi alınırken bir hata oluştu:",n)}}function g(e){const a=document.querySelector(".upcomingContainer");a.innerHTML="",e.forEach(t=>{const n=document.createElement("div");n.className="movieCard";const r=`https://image.tmdb.org/t/p/w500${t.poster_path}`;n.innerHTML=`
            <img src="${r}" alt="${t.title}" class="moviePoster" width="" height="">
            <div class="movieDetails">
                <div class="movieTitle">
                    <h2 class="movieTitle">${t.title}</h2>
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
                        <p class="releaseDate">${y(t.release_date)}</p>
                        <p class="votes"><span class="rating">${t.vote_average}</span> / <span class="total-votes">${t.vote_count}</span></p>
                        <p class="popularity"><span>${t.popularity}</span></p>
                        <p class="genre">${l(t.genre_ids)}</p>
                    </div>
                </div>
                <div class="movieDetailsAbout">
                    <p class="description">
                        ${t.overview}
                    </p>
                </div>
                <button class="add-library-btn">Add to my library</button>
            </div>
        `,a.appendChild(n)})}function y(e){const a={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString(void 0,a)}function l(e){const a={28:"Action",35:"Comedy",18:"Drama",27:"Horror"};return e.map(t=>a[t]).join(", ")}f("action");document.querySelector(".about-link").addEventListener("click",()=>{document.querySelector(".about").classList.remove("hidden"),document.querySelector("header").classList.add("hidden"),document.querySelector("main").classList.add("hidden"),document.querySelector(".footer-container").classList.add("hidden")});document.querySelector(".about-x").addEventListener("click",()=>{document.querySelector(".about").classList.add("hidden"),document.querySelector("header").classList.remove("hidden"),document.querySelector("main").classList.remove("hidden"),document.querySelector(".footer-container").classList.remove("hidden")});function v(e){const a=document.querySelector(".card-container"),t=document.createElement("div");t.classList.add("card");const n=document.createElement("img");n.src=e.imageUrl,n.alt=e.title;const r=document.createElement("div");r.classList.add("card-info");const o=document.createElement("h3");o.textContent=e.title;const i=document.createElement("p");i.textContent=`${e.genre} | ${e.year}`;const c=document.createElement("div");c.classList.add("rating"),c.textContent=e.rating;const s=document.createElement("button");s.classList.add("trailer-btn"),s.textContent="Watch Trailer",s.setAttribute("data-trailer",e.trailerUrl),s.addEventListener("click",function(){const d=this.getAttribute("data-trailer");d?window.open(d,"_blank","width=800,height=600"):alert("Trailer not available for this movie.")}),r.appendChild(o),r.appendChild(i),r.appendChild(c),r.appendChild(s),t.appendChild(n),t.appendChild(r),a.appendChild(t)}function b(e){e.forEach(a=>{v(a)})}fetch("your-api-url").then(e=>e.json()).then(e=>{b(e.movies)}).catch(e=>console.error("Error fetching movie data:",e));
//# sourceMappingURL=main-D2dbSsoW.js.map
