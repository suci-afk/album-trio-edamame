import "./style.css";

const BASE = import.meta.env.BASE_URL;

// ===============================
// DATA
// ===============================

let photos =
JSON.parse(localStorage.getItem("photos")) || [];

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

let albums =
JSON.parse(localStorage.getItem("albums")) || [
    "Trio Edamame",
    "Kenangan",
    "Edamamers"
];

// ===============================
// SIMPAN DATA
// ===============================

function savePhotos(){

    localStorage.setItem(
        "photos",
        JSON.stringify(photos)
    );

}

function saveAlbums(){

    localStorage.setItem(
        "albums",
        JSON.stringify(albums)
    );

}

function saveFavorites(){

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}
// ===============================
// MEMBUAT LAYOUT
// ===============================

document.querySelector("#app").innerHTML = `

<div class="container">

<div id="overlay"></div>

<aside class="sidebar">

<div class="logo">

<img
src="${BASE}logo.png"
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

<img src="${BASE}footer.png">

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

src="${
localStorage.getItem("profilePhoto")
||
BASE+"profile.png"
}">

<div
class="user"
id="navbarUser">

👤 Halo,
${localStorage.getItem("profileName") || "Edamamers"}!

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

`;
// ===============================
// DASHBOARD
// ===============================
function updateDashboard() {

    const totalPhoto = document.getElementById("totalPhoto");
    const totalAlbum = document.getElementById("totalAlbum");
    const totalFavorite = document.getElementById("totalFavorite");
    const totalUpload = document.getElementById("totalUpload");

    if (totalPhoto) {
        totalPhoto.textContent = photos.length;
    }

    if (totalAlbum) {
        totalAlbum.textContent = albums.length;
    }

    if (totalFavorite) {
        totalFavorite.textContent = favorites.length;
    }

    if (totalUpload) {
        totalUpload.textContent = photos.length;
    }

}

function renderDashboard(){

document.getElementById("content").innerHTML=`

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

<img src="${BASE}Hero.png">

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

`;

}
// ===============================
// ALBUM
// ===============================
// ===============================
// Menampilkan Album
// ===============================

function loadAlbums() {

    const albumGrid = document.getElementById("albumGrid");

    if (!albumGrid) return;

    albumGrid.innerHTML = "";

    albums.forEach(album => {

        const jumlah = photos.filter(photo => photo.album === album).length;

        const cover =
            photos.find(photo => photo.album === album)?.src ||
            BASE + "no-image.png";

        albumGrid.innerHTML += `
        <div class="album-card" data-album="${album}">
            <img src="${cover}" alt="${album}">
            <h3>${album}</h3>
            <p class="jumlah-foto">${jumlah} Foto</p>
        </div>
        `;

    });

}

// ===============================
// Dropdown Album
// ===============================

function loadAlbumSelect() {

    const select = document.getElementById("albumSelect");

    if (!select) return;

    select.innerHTML = "";

    albums.forEach(album => {

        select.innerHTML += `
            <option value="${album}">
                ${album}
            </option>
        `;

    });

}

// ===============================
// Tambah Album
// ===============================

function initAddAlbum() {

    const btn = document.getElementById("addAlbum");

    if (!btn) return;

    btn.onclick = () => {

        const input = document.getElementById("albumName");

        const nama = input.value.trim();

        if (nama === "") {

            alert("Masukkan nama album!");
            return;

        }

        if (albums.includes(nama)) {

            alert("Album sudah ada!");
            return;

        }

        albums.push(nama);

        saveAlbums();

        input.value = "";

        loadAlbums();

        loadAlbumSelect();

        updateDashboard();

    };

}

// ===============================
// Update Jumlah Foto
// ===============================

function updateAlbumCount() {

    document.querySelectorAll(".album-card").forEach(card => {

        const album = card.dataset.album;

        const jumlah = photos.filter(
            photo => photo.album === album
        ).length;

        const teks = card.querySelector(".jumlah-foto");

        if (teks) {
            teks.textContent = jumlah + " Foto";
        }

    });

}

// ===============================
// GALLERY
// ===============================
// ===============================
// Menampilkan Gallery
// ===============================

function loadGallery() {

    const galleryGrid = document.getElementById("galleryGrid");

    if (!galleryGrid) return;

    galleryGrid.innerHTML = "";

    photos.forEach(photo => {

        const isFavorite = favorites.includes(photo.src);

        galleryGrid.innerHTML += `

        <div
            class="gallery-item"
            data-name="${photo.name}"
            data-album="${photo.album}">

            <img src="${photo.src}" alt="${photo.name}">

            <div class="gallery-action">

                <button class="fav-btn">

                    ${isFavorite ? "❤️" : "🤍"}

                </button>

                <button class="delete-btn">

                    🗑️

                </button>

            </div>

        </div>

        `;

    });

}
// ===============================
// Upload Foto
// ===============================

function initUpload() {

    const uploadBtn = document.getElementById("uploadBtn");

    if (!uploadBtn) return;

    uploadBtn.onclick = () => {

        const file =
            document.getElementById("uploadFile").files[0];

        const album =
            document.getElementById("albumSelect").value;

        if (!file) {

            alert("Silakan pilih foto!");

            return;

        }

        const reader = new FileReader();

        reader.onload = function (e) {

            photos.push({

                src: e.target.result,

                name: file.name,

                album: album

            });

            savePhotos();

            loadGallery();

            loadAlbums();

            updateAlbumCount();

            updateDashboard();

        };

        reader.readAsDataURL(file);

    };

}
// ===============================
// Favorit & Hapus
// ===============================

document.addEventListener("click", function (e) {

    // FAVORIT

    if (e.target.classList.contains("fav-btn")) {

        const src =
            e.target.closest(".gallery-item")
                .querySelector("img").src;

        if (favorites.includes(src)) {

            favorites =
                favorites.filter(item => item !== src);

            e.target.innerHTML = "🤍";

        } else {

            favorites.push(src);

            e.target.innerHTML = "❤️";

        }

        saveFavorites();

        updateDashboard();

    }

    // HAPUS

    if (e.target.classList.contains("delete-btn")) {

        if (!confirm("Hapus foto ini?")) return;

        const src =
            e.target.closest(".gallery-item")
                .querySelector("img").src;

        photos =
            photos.filter(photo => photo.src !== src);

        favorites =
            favorites.filter(item => item !== src);

        savePhotos();

        saveFavorites();

        loadGallery();

        loadAlbums();

        updateAlbumCount();

        updateDashboard();

    }

});
renderDashboard();

loadAlbums();

loadAlbumSelect();

loadGallery();

initAddAlbum();

initUpload();

updateDashboard();