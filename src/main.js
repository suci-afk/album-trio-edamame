import './style.css'
const BASE = import.meta.env.BASE_URL;
let photos = JSON.parse(localStorage.getItem("photos")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let albums = JSON.parse(localStorage.getItem("albums")) || [
    "Trio Edamame",
    "Kenangan",
    "Edamamers"
];

document.querySelector('#app').innerHTML = `

<div class="container">

  <div id="overlay"></div>

  <!-- Sidebar -->
  <aside class="sidebar">

    <div class="logo">
      <img src="${BASE}logo.png" class="logo-img" alt="Logo">
      <h2>Edamamers</h2>
      <span>Gallery</span>
    </div>

    <ul class="menu">
      <li class="active" id="dashboard">🏠 Dashboard</li>
      <li id="album">📁 Album</li>
      <li id="gallery">🖼 Galeri</li>
      <li id="favorite">🤍 Favorit</li>
      <li id="upload">⬆ Upload Foto</li>
      <li id="profile">👤 Profil</li>
      <li id="setting">⚙ Pengaturan</li>
      <li id="about">ℹ Tentang Aplikasi</li>
    </ul>

    <div class="sidebar-footer">
      <img src="${BASE}footer.png" alt="Footer">
      <p>
        Simpan, kelola, dan bagikan setiap momen terbaik bersama
        <b>Trio Edamame!</b> 💚
      </p>
    </div>

  </aside>

  <!-- Main Content -->
  <main class="main-content">

    <!-- Header -->
    <header class="navbar">

    <button id="menuBtn" class="menu-btn">
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
                src="${
                  localStorage.getItem("profilePhoto") || BASE + "profile.png"
                }"
                class="navbar-photo">

            <div
                class="user"
                id="navbarUser">

                👤 Halo,
                ${localStorage.getItem("profileName") || "Edamamers"}!

            </div>

        </div>

    </header>

    <div id="content">

      <!-- Hero -->
      <div class="hero">

        <div class="hero-text">
          <h1>Welcome to</h1>
          <h2>Edamamers Gallery </h2>
          <p>Simpan setiap momen berharga bersama Trio Edamame.</p>

          <button>Jelajahi Galeri</button>
        </div>

        <div class="hero-image">
          <img src="${BASE}Hero.png" alt="Hero">
        </div>

      </div>

      <!-- Statistik -->
      <section class="stats">

       <div class="card">
  <h2 id="totalPhoto">3</h2>
  <p>📷 Total Foto</p>
</div>

<div class="card">
  <h2 id="totalAlbum">3</h2>
  <p>📁 Album</p>
</div>

<div class="card">
  <h2 id="totalFavorite">0</h2>
  <p>❤️ Favorit</p>
</div>

<div class="card">
  <h2 id="totalUpload">0</h2>
  <p>📤 Upload</p>
</div>

      </section>

      <!-- Album -->
      <section class="album">

        <h2>📁 Album Terbaru</h2>
        <div class="album-form">

  <input
    type="text"
    id="albumName"
    placeholder="Masukkan nama album">

  <button id="addAlbum">
    + Tambah Album
  </button>

</div>

        <div class="album-grid" id="albumGrid">
</div>

      </section>

      <!-- Galeri -->
<section class="gallery">

    <button id="showAll" class="show-all">
        Lihat Semua Foto
    </button>

    <h2>🖼 Galeri Foto</h2>

    <div class="gallery-grid" id="galleryGrid"></div>

</section>

      <!-- Upload -->
      <section class="upload">

  <h2>📤 Upload Foto</h2>

  <!-- Pilih Foto -->
  <input type="file" id="uploadFile">

  <!-- Pilih Album -->
  <select id="albumSelect">

    <option value="Trio Edamame">Trio Edamame</option>

    <option value="Kenangan">Kenangan</option>

    <option value="Edamamers">Edamamers</option>

  </select>

  <!-- Tombol Upload -->
  <button id="uploadBtn">
    Upload
  </button>

</section>

    </div>
    <!-- Preview Foto -->

<div id="preview" class="preview">

    <span id="closePreview">&times;</span>

    <img id="previewImage">

</div>
<div id="toast" class="toast">
    Foto berhasil!
</div>

  </main>

</div>
`
// ==========================
// Event Menu Sidebar
// ==========================

document.getElementById("dashboard").addEventListener("click", () => {

  closeSidebar();

    document.getElementById("content").innerHTML = `

    <!-- Hero -->
    <div class="hero">

        <div class="hero-text">
            <h1>Welcome to</h1>
            <h2>Edamamers Gallery</h2>
            <p>Simpan setiap momen berharga bersama Trio Edamame.</p>

            <button id="heroBtn">Jelajahi Galeri</button>

        </div>

        <div class="hero-image">
            <img src="${BASE}Hero.png" alt="Hero">
        </div>

    </div>

    <!-- Statistik -->
    <section class="stats">

        <div class="card">
            <h2 id="totalPhoto">0</h2>
            <p>📷 Total Foto</p>
        </div>

        <div class="card">
            <h2 id="totalAlbum">0</h2>
            <p>📁 Album</p>
        </div>

        <div class="card">
            <h2 id="totalFavorite">0</h2>
            <p>❤️ Favorit</p>
        </div>

        <div class="card">
            <h2 id="totalUpload">0</h2>
            <p>📤 Upload</p>
        </div>

    </section>

    <!-- Album -->
    <section class="album">

        <h2>📁 Album Terbaru</h2>

        <div class="album-form">

            <input
                type="text"
                id="albumName"
                placeholder="Masukkan nama album">

            <button id="addAlbum">
                + Tambah Album
            </button>

        </div>

        <div class="album-grid" id="albumGrid"></div>

    </section>

    <!-- Galeri -->
    <section class="gallery">

        <button id="showAll" class="show-all">
            Lihat Semua Foto
        </button>

        <h2>🖼 Galeri Foto</h2>

        <div class="gallery-grid" id="galleryGrid"></div>

    </section>

    <!-- Upload -->
    <section class="upload">

        <h2>📤 Upload Foto</h2>

        <input type="file" id="uploadFile">

        <select id="albumSelect"></select>

        <button id="uploadBtn">
            Upload
        </button>

    </section>

    `;

    loadAlbums();
    loadAlbumSelect();
    loadGallery();
    updateDashboard();
    initUpload();

});

document.getElementById("album").addEventListener("click", () => {

    closeSidebar();

   const albumList = albums;

    let html = `
    <section class="album-page">

        <h1>📁 Album Edamamers</h1>

        <p>Pilih album untuk melihat koleksi foto.</p>

        <div class="album-grid">
    `;

    if (albumList.length === 0) {

        html += `<p>Belum ada album.</p>`;

    } else {

        albumList.forEach(album => {

    const jumlah = photos.filter(
        photo => photo.album === album
    ).length;

    const cover =
        photos.find(photo => photo.album === album)?.src || BASE + "foto1.png"

    html += `
    <div class="album-card"
         data-album="${album}">

        <img src="${cover}" alt="${album}">

        <h3>${album}</h3>

        <p class="jumlah-foto">${jumlah} Foto</p>

    </div>
    `;

});

    }

    html += `
        </div>
    </section>
    `;

    document.getElementById("content").innerHTML = html;

    // Klik album
    document.addEventListener("click", function(e){

    const card = e.target.closest(".album-card");

    if(!card) return;

    const namaAlbum = card.dataset.album;

    const hasil = photos.filter(photo => photo.album === namaAlbum);

    let html = `
    <section class="gallery-page">

        <button id="backAlbum">← Kembali</button>

        <h1>${namaAlbum}</h1>

        <div class="gallery-grid">
    `;

    if(hasil.length === 0){

        html += `<p>Belum ada foto.</p>`;

    }else{

        hasil.forEach(photo=>{

            html += `
            <div class="gallery-item">

                <img src="${photo.src}" alt="${photo.name}">

                <div class="gallery-action">

                    <button class="fav-btn">
                        ${favorites.includes(photo.src) ? "❤️":"🤍"}
                    </button>

                    <button class="delete-btn">
                        🗑️
                    </button>

                </div>

            </div>
            `;

        });

    }

    html += `
        </div>
    </section>
    `;

    document.getElementById("content").innerHTML = html;

    document.getElementById("backAlbum").onclick = () => {
        document.getElementById("album").click();
    };

});

});
document.getElementById("gallery").addEventListener("click", () => {

    closeSidebar();

    let html = `
    <section class="gallery-page">

        <h1>🖼 Edamamers Gallery</h1>

        <p>Koleksi foto terbaik Trio Edamame.</p>

        <div class="gallery-grid">
    `;


    // HANYA FOTO HASIL UPLOAD
    photos.forEach(photo => {

        html += `
            <div class="gallery-item"
                 data-name="${photo.name}"
                 data-album="${photo.album}">

                <img src="${photo.src}" alt="${photo.name}">

                <div class="gallery-action">

                    <button class="fav-btn">
                        ${favorites.includes(photo.src) ? "❤️" : "🤍"}
                    </button>

                    <button class="delete-btn">
                        🗑️
                    </button>

                </div>

            </div>
        `;

    });

    html += `
        </div>
    </section>
    `;


    document.getElementById("content").innerHTML = html;

});
document.getElementById("upload").addEventListener("click", () => {

  closeSidebar();

    const uploadSection = document.querySelector(".upload");

    if (uploadSection) {

        uploadSection.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        document.getElementById("dashboard").click();

        setTimeout(() => {

            document.querySelector(".upload").scrollIntoView({
                behavior: "smooth"
            });

        }, 100);

    }

});

document.getElementById("favorite").addEventListener("click", () => {

  closeSidebar();

    let html = `
    <section class="favorite-page">

    <h1>❤️ Foto Favorit</h1>

    <div class="favorite-grid">
    `;

    if (favorites.length == 0) {

        html += `<p class="empty-favorite">
        Belum ada foto favorit.
        </p>`;

    } else {

        favorites
.filter(src=>photos.some(photo=>photo.src===src))
.forEach(photo=>{

    if(!photo) return;

    html += `
        <div class="gallery-item">
            <img src="${photo}">
        </div>
    `;

});

    }

    html += `</div></section>`;

    document.getElementById("content").innerHTML = html;

});

document.getElementById("profile").addEventListener("click", () => {

  closeSidebar();

  document.getElementById("content").innerHTML = `

  <section class="profile-page">

  <div class="profile-card">

  <img src="${
  localStorage.getItem("profilePhoto") || BASE + "profile.png"}" 
  id="profilePreview" 
  class="profile-photo">

  <h2 id="profileName">
  ${
  localStorage.getItem("profileName") || "Edamamers"
  }
  </h2>

  <p>Photographer & Gallery Creator</p>

  <input
  type="text"
  id="newName"
  placeholder="Masukkan nama baru">

  <input
  type="file"
  id="newPhoto">

  <button id="saveProfile">
  💾 Simpan Profil
  </button>

  </div>

  </section>

  `;
  document.getElementById("saveProfile").addEventListener("click", () => {

    const nama = document.getElementById("newName").value;
    const file = document.getElementById("newPhoto").files[0];

    if (nama != "") {

        localStorage.setItem("profileName", nama);

        document.getElementById("profileName").innerHTML = nama;
        document.getElementById("navbarUser").innerHTML =
            "👤 Halo, " + nama + "!";

    }

    if (file) {

        const reader = new FileReader();

        reader.onload = function(e) {

            localStorage.setItem("profilePhoto", e.target.result);

            loadAlbums();

loadAlbumSelect();

updateDashboard();

document.getElementById("gallery").click();

        };

        reader.readAsDataURL(file);

    }

   alert("Profil berhasil disimpan!");
  });

});

document.getElementById("setting").addEventListener("click", () => {

  closeSidebar();

    document.getElementById("content").innerHTML = `

    <section class="setting-page">

        <h1>⚙ Pengaturan</h1>

        <div class="setting-card">

            <h3>Tampilan Aplikasi</h3>

            <button id="themeBtn">
                🌙 Aktifkan Dark Mode
            </button>

        </div>

    </section>

    `;

    const themeBtn = document.getElementById("themeBtn");

    if(localStorage.getItem("theme") === "dark"){
        themeBtn.innerHTML = "☀ Light Mode";
    }

    themeBtn.addEventListener("click", toggleTheme);

});

document.getElementById("about").addEventListener("click", () => {

  closeSidebar();
  
    document.getElementById("content").innerHTML = `

    <section class="about-page">

        <h1>ℹ Tentang Aplikasi</h1>

        <div class="about-card">

            <h2>Edamamers Gallery</h2>

            <p>
                Edamamers Gallery adalah aplikasi galeri foto sederhana
                yang dibuat untuk menyimpan, mengelola, dan menampilkan
                koleksi foto berdasarkan album.
            </p>

            <h3>✨ Fitur Utama</h3>

            <ul>
                <li>📷 Upload Foto</li>
                <li>📁 Membuat Album</li>
                <li>🖼 Menampilkan Galeri</li>
                <li>❤️ Menandai Foto Favorit</li>
                <li>👤 Mengubah Profil</li>
                <li>🌙 Dark Mode</li>
                <li>🔍 Pencarian Foto & Album</li>
            </ul>

            <h3>👨‍💻 Dibuat Oleh</h3>

            <p>
                Suci | Software Developer
            </p>

            <h3>💚 Versi</h3>

            <p>Version 1.0</p>

        </div>

    </section>

    `;

});

// ==========================
// Upload Foto ke Galeri
// ==========================
function initUpload(){

    const uploadBtn = document.getElementById("uploadBtn");
    const uploadFile = document.getElementById("uploadFile");
    const galleryGrid = document.getElementById("galleryGrid");
    const albumSelect = document.getElementById("albumSelect");

    if(!uploadBtn) return;

    albumSelect.innerHTML = "";

    albums.forEach(album=>{

        albumSelect.innerHTML += `
            <option value="${album}">
                ${album}
            </option>
        `;

    });

    uploadBtn.onclick = () => {

        const file = uploadFile.files[0];

        if(!file){
            alert("Silakan pilih foto!");
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e){

            photos.push({
                src:e.target.result,
                album:albumSelect.value,
                name:file.name
            });

            localStorage.setItem("photos",JSON.stringify(photos));

             loadGallery();
              loadAlbums();
              loadAlbumSelect();
              updateDashboard();
              updateAlbumCount();

            alert("Foto berhasil diupload!");

        };

        reader.readAsDataURL(file);

    };

}

// ==========================
// Tombol Hero
// ==========================

document.addEventListener("click", (e) => {

    if(e.target.id==="heroBtn") {

        const gallery = document.querySelector(".gallery");

        if (gallery) {
            gallery.scrollIntoView({
                behavior: "smooth"
            });
        }

    }

});
// ===========================
// Tambah Album
// ===========================

const addAlbum = document.getElementById("addAlbum");

addAlbum.addEventListener("click",()=>{

    const namaAlbum=document.getElementById("albumName").value.trim();

    if(namaAlbum===""){

        alert("Masukkan nama album!");

        return;

    }

    if(albums.includes(namaAlbum)){

        alert("Album sudah ada!");

        return;

    }

    albums.push(namaAlbum);

    localStorage.setItem(
        "albums",
        JSON.stringify(albums)
    );

    document.getElementById("albumName").value="";

    loadAlbums();

    loadAlbumSelect();

    updateDashboard();

});
// ==========================
// FAVORIT & HAPUS FOTO
// ==========================

document.addEventListener("click", function(e){

    // FAVORIT
    if(e.target.classList.contains("fav-btn")){

        const card = e.target.closest(".gallery-item");
        const src = card.querySelector("img").src;

        if(e.target.textContent=="🤍"){

            e.target.textContent="❤️";

            if(!favorites.includes(src)){
                favorites.push(src);
            }

        }else{

            e.target.textContent="🤍";

            favorites=favorites.filter(item=>item!==src);

        }

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        updateDashboard();
    }

    // HAPUS
    if(e.target.classList.contains("delete-btn")){

        if(!confirm("Hapus foto ini?")) return;

        const card=e.target.closest(".gallery-item");
        const src=card.querySelector("img").src;

        favorites=favorites.filter(item=>item!==src);
        photos=photos.filter(photo=>photo.src!==src);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        localStorage.setItem(
            "photos",
            JSON.stringify(photos)
        );

        card.remove();

loadAlbums();

loadAlbumSelect();

updateDashboard();

if(document.getElementById("favorite").classList.contains("active")){

    document.getElementById("favorite").click();

}

if(document.getElementById("gallery").classList.contains("active")){

    document.getElementById("gallery").click();

}

    }

});
// ==========================
// Preview Foto
// ==========================

const preview = document.getElementById("preview");

const previewImage = document.getElementById("previewImage");

const closePreview = document.getElementById("closePreview");

document.addEventListener("click",(e)=>{

    if(e.target.tagName==="IMG" && e.target.closest(".gallery-item")){

        preview.style.display="flex";

        previewImage.src=e.target.src;

    }

});

closePreview.addEventListener("click",()=>{

    preview.style.display="none";

});
// ==========================
// Search Foto & Album
// ==========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const keyword = searchInput.value.toLowerCase();

    // Album
    document.querySelectorAll(".album-card").forEach(card => {

        const nama = (card.dataset.album || "").toLowerCase();

        if (nama.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    // Galeri
    document.querySelectorAll(".gallery-item").forEach(item => {

        const nama = (item.dataset.name || "").toLowerCase();

        if (nama.includes(keyword)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

});
// =====================
// Load Local Storage
// =====================

const galleryGrid = document.getElementById("galleryGrid");

if(galleryGrid){
    photos.forEach(photo=>{

        if(!photo.src) return;

        const div=document.createElement("div");

        div.className="gallery-item";
        div.dataset.name=photo.name;
        div.dataset.album=photo.album;

        div.innerHTML=`
            <img src="${photo.src}" alt="${photo.name}">
            <div class="gallery-action">
                <button class="fav-btn">
                    ${favorites.includes(photo.src) ? "❤️" : "🤍"}
                </button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        galleryGrid.appendChild(div);

    });
}
// ==========================
// Buka Album
// ==========================

document.addEventListener("click", (e) => {

    const card = e.target.closest(".album-card");

    if (!card) return;

    const namaAlbum = card.dataset.album;

    const semuaFoto = document.querySelectorAll(".gallery-item");

    semuaFoto.forEach(foto => {

        if (foto.dataset.album === namaAlbum) {

            foto.style.display = "block";

        } else {

            foto.style.display = "none";

        }

    });

    document.querySelector(".gallery").scrollIntoView({
        behavior: "smooth"
    });

});

// ==========================
// Tombol Lihat Semua Foto
// ==========================

document.getElementById("showAll").addEventListener("click", () => {

    document.querySelectorAll(".gallery-item").forEach(item => {
        item.style.display = "block";
    });

});
function toggleTheme(){

    document.body.classList.toggle("dark");

    const btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        btn.innerHTML="☀ Light Mode";

    }else{

        localStorage.setItem("theme","light");

        btn.innerHTML="🌙 Aktifkan Dark Mode";

    }

}
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

}
// ==========================
// Update Statistik Dashboard
// ==========================

function updateDashboard(){

    const totalPhoto = photos.length;

    const totalAlbum = albums.length;

    const totalFavorite = favorites.length;

    const totalUpload = photos.length;

    document.getElementById("totalPhoto").textContent = totalPhoto;

    document.getElementById("totalAlbum").textContent = totalAlbum;

    document.getElementById("totalFavorite").textContent = totalFavorite;

    document.getElementById("totalUpload").textContent = totalUpload;

}
function updateAlbumCount(){

    document.querySelectorAll(".album-card").forEach(card => {

        const album = card.dataset.album;

        const jumlah = photos.filter(photo => photo.album === album).length;

        const teks = card.querySelector(".jumlah-foto");

        if(teks){
            teks.textContent = jumlah + " Foto";
        }

    });

}

function loadAlbumSelect(){

    const albumSelect = document.getElementById("albumSelect");

    if(!albumSelect) return;

    albumSelect.innerHTML = "";

    albums.forEach(album=>{

        albumSelect.innerHTML += `
        <option value="${album}">
            ${album}
        </option>
        `;

    });

}
function loadAlbums(){

    const albumGrid = document.getElementById("albumGrid");

    if(!albumGrid) return;

    albumGrid.innerHTML = "";

    albums.forEach(album=>{

        const jumlah = photos.filter(photo => photo.album === album).length;

        const cover = photos.find(photo => photo.album === album)?.src || BASE + "foto1.png";

        albumGrid.innerHTML += `
        <div class="album-card"
             data-name="${album}"
             data-album="${album}">

            <img src="${cover}" alt="${album}">

            <h3>${album}</h3>

            <p class="jumlah-foto">${jumlah} Foto</p>

        </div>
        `;

    });

}

function loadGallery(){

    const galleryGrid = document.getElementById("galleryGrid");

    if(!galleryGrid) return;

    galleryGrid.innerHTML="";

    photos.forEach(photo=>{

        const isFavorite = favorites.includes(photo.src);

        galleryGrid.innerHTML += `
        <div class="gallery-item"
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

function showToast(text){

    const toast=document.getElementById("toast");

    toast.textContent=text;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);
}
function closeSidebar() {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove("show");

        const overlay = document.getElementById("overlay");
        if (overlay) {
            overlay.classList.remove("show");
        }
    }
}
loadAlbums();
loadAlbumSelect();
loadGallery();
updateDashboard();
updateAlbumCount();
initUpload();

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
    sidebar.classList.add("show");
    overlay.classList.add("show");
};

overlay.onclick = () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
};