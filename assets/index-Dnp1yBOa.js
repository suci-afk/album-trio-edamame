(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/album-trio-edamame/`,t=JSON.parse(localStorage.getItem(`photos`))||[],n=JSON.parse(localStorage.getItem(`favorites`))||[],r=JSON.parse(localStorage.getItem(`albums`))||[`Trio Edamame`,`Kenangan`,`Edamamers`];function i(){localStorage.setItem(`photos`,JSON.stringify(t))}function a(){localStorage.setItem(`albums`,JSON.stringify(r))}function o(){localStorage.setItem(`favorites`,JSON.stringify(n))}document.querySelector(`#app`).innerHTML=`

<div class="container">

<div id="overlay"></div>

<aside class="sidebar">

<div class="logo">

<img
src="${e}logo.png"
class="logo-img">

<h2>Edamamers</h2>

<span>Gallery</span>

</div>

<ul class="menu">

<li id="dashboard" class="active">
🏠 Dashboard
</li>

<li id="album">
📁 Album
</li>

<li id="gallery">
🖼 Galeri
</li>

<li id="favorite">
❤️ Favorit
</li>

<li id="upload">
⬆ Upload Foto
</li>

<li id="profile">
👤 Profil
</li>

<li id="setting">
⚙ Pengaturan
</li>

<li id="about">
ℹ Tentang
</li>

</ul>

<div class="sidebar-footer">

<img src="${e}footer.png">

<p>

Simpan setiap momen terbaik
bersama Edamamers Gallery.

</p>

</div>

</aside>

<main class="main-content">

<header class="navbar">

<button
id="menuBtn"
class="menu-btn">

☰

</button>

<div class="navbar-left">

<input
type="text"
id="searchInput"
placeholder="Cari foto atau album...">

</div>

<div class="navbar-right">

<img

class="navbar-photo"

src="${localStorage.getItem(`profilePhoto`)||`/album-trio-edamame/profile.png`}">

<div
class="user"
id="navbarUser">

👤 Halo,
${localStorage.getItem(`profileName`)||`Edamamers`}!

</div>

</div>

</header>

<div id="content"></div>

</main>

</div>

<div id="preview" class="preview">

<span id="closePreview">
&times;
</span>

<img id="previewImage">

</div>

<div id="toast" class="toast"></div>

`;function s(){document.getElementById(`content`).innerHTML=`

<div class="hero">

<div class="hero-text">

<h1>Welcome to</h1>

<h2>Edamamers Gallery</h2>

<p>

Simpan setiap momen
bersama Trio Edamame.

</p>

<button id="heroBtn">

Jelajahi Galeri

</button>

</div>

<div class="hero-image">

<img src="${e}Hero.png">

</div>

</div>

<section class="stats">

<div class="card">

<h2 id="totalPhoto">

0

</h2>

<p>📷 Total Foto</p>

</div>

<div class="card">

<h2 id="totalAlbum">

0

</h2>

<p>📁 Album</p>

</div>

<div class="card">

<h2 id="totalFavorite">

0

</h2>

<p>❤️ Favorit</p>

</div>

<div class="card">

<h2 id="totalUpload">

0

</h2>

<p>📤 Upload</p>

</div>

</section>

<section class="album">

<h2>

📁 Album

</h2>

<div class="album-form">

<input

id="albumName"

placeholder="Nama Album">

<button id="addAlbum">

+ Tambah Album

</button>

</div>

<div
id="albumGrid"
class="album-grid">

</div>

</section>

<section class="gallery">

<button
id="showAll"
class="show-all">

Lihat Semua Foto

</button>

<h2>

🖼 Galeri

</h2>

<div
id="galleryGrid"
class="gallery-grid">

</div>

</section>

<section class="upload">

<h2>

📤 Upload Foto

</h2>

<input
type="file"
id="uploadFile">

<select id="albumSelect">

</select>

<button id="uploadBtn">

Upload

</button>

</section>

`}function c(){let e=document.getElementById(`albumGrid`);e&&(e.innerHTML=``,r.forEach(n=>{let r=t.filter(e=>e.album===n).length,i=t.find(e=>e.album===n)?.src||`/album-trio-edamame/no-image.png`;e.innerHTML+=`
        <div class="album-card" data-album="${n}">
            <img src="${i}" alt="${n}">
            <h3>${n}</h3>
            <p class="jumlah-foto">${r} Foto</p>
        </div>
        `}))}function l(){let e=document.getElementById(`albumSelect`);e&&(e.innerHTML=``,r.forEach(t=>{e.innerHTML+=`
            <option value="${t}">
                ${t}
            </option>
        `}))}function u(){let e=document.getElementById(`addAlbum`);e&&(e.onclick=()=>{let e=document.getElementById(`albumName`),t=e.value.trim();if(t===``){alert(`Masukkan nama album!`);return}if(r.includes(t)){alert(`Album sudah ada!`);return}r.push(t),a(),e.value=``,c(),l(),updateDashboard()})}function d(){document.querySelectorAll(`.album-card`).forEach(e=>{let n=e.dataset.album,r=t.filter(e=>e.album===n).length,i=e.querySelector(`.jumlah-foto`);i&&(i.textContent=r+` Foto`)})}function f(){let e=document.getElementById(`galleryGrid`);e&&(e.innerHTML=``,t.forEach(t=>{let r=n.includes(t.src);e.innerHTML+=`

        <div
            class="gallery-item"
            data-name="${t.name}"
            data-album="${t.album}">

            <img src="${t.src}" alt="${t.name}">

            <div class="gallery-action">

                <button class="fav-btn">

                    ${r?`❤️`:`🤍`}

                </button>

                <button class="delete-btn">

                    🗑️

                </button>

            </div>

        </div>

        `}))}function p(){let e=document.getElementById(`uploadBtn`);e&&(e.onclick=()=>{let e=document.getElementById(`uploadFile`).files[0],n=document.getElementById(`albumSelect`).value;if(!e){alert(`Silakan pilih foto!`);return}let r=new FileReader;r.onload=function(r){t.push({src:r.target.result,name:e.name,album:n}),i(),f(),c(),d(),updateDashboard()},r.readAsDataURL(e)})}document.addEventListener(`click`,function(e){if(e.target.classList.contains(`fav-btn`)){let t=e.target.closest(`.gallery-item`).querySelector(`img`).src;n.includes(t)?(n=n.filter(e=>e!==t),e.target.innerHTML=`🤍`):(n.push(t),e.target.innerHTML=`❤️`),o(),updateDashboard()}if(e.target.classList.contains(`delete-btn`)){if(!confirm(`Hapus foto ini?`))return;let r=e.target.closest(`.gallery-item`).querySelector(`img`).src;t=t.filter(e=>e.src!==r),n=n.filter(e=>e!==r),i(),o(),f(),c(),d(),updateDashboard()}}),s(),c(),l(),f(),u(),p(),updateDashboard();