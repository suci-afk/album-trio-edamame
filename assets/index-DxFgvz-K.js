(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/album-trio-edamame/`,t=JSON.parse(localStorage.getItem(`photos`))||[],n=JSON.parse(localStorage.getItem(`favorites`))||[],r=JSON.parse(localStorage.getItem(`albums`))||[`Trio Edamame`,`Kenangan`,`Edamamers`];document.querySelector(`#app`).innerHTML=`

<div class="container">

  <div id="overlay"></div>

  <!-- Sidebar -->
  <aside class="sidebar">

    <div class="logo">
      <img src="${e}logo.png" class="logo-img" alt="Logo">
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
      <img src="${e}footer.png" alt="Footer">
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
                src="${localStorage.getItem(`profilePhoto`)||`/album-trio-edamame/profile.png`}"
                class="navbar-photo">

            <div
                class="user"
                id="navbarUser">

                👤 Halo,
                ${localStorage.getItem(`profileName`)||`Edamamers`}!

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

          <button id="heroBtn">
    Jelajahi Galeri
</button>
        </div>

        <div class="hero-image">
          <img src="${e}Hero.png" alt="Hero">
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
`,document.getElementById(`dashboard`).addEventListener(`click`,()=>{x(),i()}),document.getElementById(`album`).addEventListener(`click`,()=>{x();let e=r,i=`
    <section class="album-page">

        <h1>📁 Album Edamamers</h1>

        <p>Pilih album untuk melihat koleksi foto.</p>

        <div class="album-grid">
    `;e.length===0?i+=`<p>Belum ada album.</p>`:e.forEach(e=>{let n=t.filter(t=>t.album===e).length,r=t.find(t=>t.album===e)?.src||`/album-trio-edamame/no-image.png`;i+=`
    <div class="album-card"
         data-album="${e}">

        <img src="${r}" alt="${e}">

        <h3>${e}</h3>

        <p class="jumlah-foto">${n} Foto</p>

    </div>
    `}),i+=`
        </div>
    </section>
    `,document.getElementById(`content`).innerHTML=i,document.addEventListener(`click`,e=>{let r=e.target.closest(`.album-card`);if(!r)return;let i=r.dataset.album,a=t.filter(e=>e.album===i),o=`
    <section class="gallery-page">

        <button id="backAlbum">← Kembali</button>

        <h1>${i}</h1>

        <div class="gallery-grid">
    `;a.length===0?o+=`<p>Belum ada foto.</p>`:a.forEach(e=>{o+=`
            <div class="gallery-item">

                <img src="${e.src}" alt="${e.name}">

                <div class="gallery-action">

                    <button class="fav-btn">
                        ${n.some(t=>t===e.src)?`❤️`:`🤍`}
                    </button>

                    <button class="delete-btn">
                        🗑️
                    </button>

                </div>

            </div>
            `}),o+=`
        </div>
    </section>
    `,document.getElementById(`content`).innerHTML=o,document.getElementById(`backAlbum`).onclick=()=>{document.getElementById(`album`).click()}})}),document.getElementById(`gallery`).addEventListener(`click`,()=>{x();let e=`
    <section class="gallery-page">

        <h1>🖼 Edamamers Gallery</h1>

        <p>Koleksi foto terbaik Trio Edamame.</p>

        <div class="gallery-grid">
    `;t.forEach(t=>{e+=`
            <div class="gallery-item"
                 data-name="${t.name}"
                 data-album="${t.album}">

                <img src="${t.src}" alt="${t.name}">

                <div class="gallery-action">

                    <button class="fav-btn">
                        ${n.some(e=>e===t.src)?`❤️`:`🤍`}
                    </button>

                    <button class="delete-btn">
                        🗑️
                    </button>

                </div>

            </div>
        `}),e+=`
        </div>
    </section>
    `,document.getElementById(`content`).innerHTML=e}),document.getElementById(`upload`).addEventListener(`click`,()=>{x();let e=document.querySelector(`.upload`);e?e.scrollIntoView({behavior:`smooth`}):(document.getElementById(`dashboard`).click(),setTimeout(()=>{document.querySelector(`.upload`).scrollIntoView({behavior:`smooth`})},100))}),document.getElementById(`favorite`).addEventListener(`click`,()=>{x();let e=`
    <section class="favorite-page">

    <h1>❤️ Foto Favorit</h1>

    <div class="favorite-grid">
    `;n.length==0?e+=`<p class="empty-favorite">
        Belum ada foto favorit.
        </p>`:n.filter(e=>t.some(t=>t.src===e)).forEach(t=>{t&&(e+=`
        <div class="gallery-item">
            <img src="${t}">
        </div>
    `)}),e+=`</div></section>`,document.getElementById(`content`).innerHTML=e}),document.getElementById(`profile`).addEventListener(`click`,()=>{x(),document.getElementById(`content`).innerHTML=`

  <section class="profile-page">

  <div class="profile-card">

  <img src="${localStorage.getItem(`profilePhoto`)||`/album-trio-edamame/profile.png`}" 
  id="profilePreview" 
  class="profile-photo">

  <h2 id="profileName">
  ${localStorage.getItem(`profileName`)||`Edamamers`}
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

  `,document.getElementById(`saveProfile`).addEventListener(`click`,()=>{let e=document.getElementById(`newName`).value,t=document.getElementById(`newPhoto`).files[0];if(e!=``&&(localStorage.setItem(`profileName`,e),document.getElementById(`profileName`).innerHTML=e,document.getElementById(`navbarUser`).innerHTML=`👤 Halo, `+e+`!`),t){let e=new FileReader;e.onload=function(e){localStorage.setItem(`profilePhoto`,e.target.result),h(),m(),f(),document.getElementById(`gallery`).click()},e.readAsDataURL(t)}alert(`Profil berhasil disimpan!`)})}),document.getElementById(`setting`).addEventListener(`click`,()=>{x(),document.getElementById(`content`).innerHTML=`

    <section class="setting-page">

        <h1>⚙ Pengaturan</h1>

        <div class="setting-card">

            <h3>Tampilan Aplikasi</h3>

            <button id="themeBtn">
                🌙 Aktifkan Dark Mode
            </button>

        </div>

    </section>

    `;let e=document.getElementById(`themeBtn`);localStorage.getItem(`theme`)===`dark`&&(e.innerHTML=`☀ Light Mode`),e.addEventListener(`click`,d)}),document.getElementById(`about`).addEventListener(`click`,()=>{x(),document.getElementById(`content`).innerHTML=`

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

    `});function i(){document.getElementById(`content`).innerHTML=`

<!-- Hero -->
<div class="hero">

    <div class="hero-text">
        <h1>Welcome to</h1>
        <h2>Edamamers Gallery</h2>
        <p>Simpan setiap momen berharga bersama Trio Edamame.</p>

        <button id="heroBtn">
            Jelajahi Galeri
        </button>

    </div>

    <div class="hero-image">
        <img src="${e}Hero.png" alt="Hero">
    </div>

</div>

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

<div id="albumGrid" class="album-grid"></div>

</section>

<section class="gallery">

<button id="showAll" class="show-all">
Lihat Semua Foto
</button>

<h2>🖼 Galeri Foto</h2>

<div id="galleryGrid" class="gallery-grid"></div>

</section>

<section class="upload">

<h2>📤 Upload Foto</h2>

<input type="file" id="uploadFile">

<select id="albumSelect"></select>

<button id="uploadBtn">
Upload
</button>

</section>

`,h(),m(),g(),f(),a()}function a(){let e=document.getElementById(`uploadBtn`),n=document.getElementById(`uploadFile`);document.getElementById(`galleryGrid`);let i=document.getElementById(`albumSelect`);e&&(i.innerHTML=``,r.forEach(e=>{i.innerHTML+=`
            <option value="${e}">
                ${e}
            </option>
        `}),e.onclick=()=>{let e=n.files[0];if(!e){alert(`Silakan pilih foto!`);return}let r=new FileReader;r.onload=function(n){t.push({src:n.target.result,album:i.value,name:e.name}),localStorage.setItem(`photos`,JSON.stringify(t)),g(),h(),m(),f(),p(),_(`Foto berhasil diupload!`)},r.readAsDataURL(e)})}document.addEventListener(`click`,e=>{e.target.id===`heroBtn`&&document.getElementById(`gallery`).click()}),document.getElementById(`addAlbum`).addEventListener(`click`,()=>{let e=document.getElementById(`albumName`).value.trim();if(e===``){alert(`Masukkan nama album!`);return}if(r.includes(e)){alert(`Album sudah ada!`);return}r.push(e),localStorage.setItem(`albums`,JSON.stringify(r)),document.getElementById(`albumName`).value=``,h(),m(),f()}),document.addEventListener(`click`,function(e){if(e.target.classList.contains(`fav-btn`)){let t=e.target.closest(`.gallery-item`).querySelector(`img`).src;e.target.textContent==`🤍`?(e.target.textContent=`❤️`,n.includes(t)||n.push(t)):(e.target.textContent=`🤍`,n=n.filter(e=>e!==t)),localStorage.setItem(`favorites`,JSON.stringify(n)),f()}if(e.target.classList.contains(`delete-btn`)){if(!confirm(`Hapus foto ini?`))return;let r=e.target.closest(`.gallery-item`),i=r.querySelector(`img`).src;n=n.filter(e=>e!==i),t=t.filter(e=>e.src!==i),localStorage.setItem(`favorites`,JSON.stringify(n)),localStorage.setItem(`photos`,JSON.stringify(t)),r.remove(),h(),m(),f(),p(),document.getElementById(`favorite`).classList.contains(`active`)&&document.getElementById(`favorite`).click(),document.getElementById(`gallery`).classList.contains(`active`)&&document.getElementById(`gallery`).click()}});var o=document.getElementById(`preview`),s=document.getElementById(`previewImage`),c=document.getElementById(`closePreview`);document.addEventListener(`click`,e=>{e.target.tagName===`IMG`&&e.target.closest(`.gallery-item`)&&(o.style.display=`flex`,s.src=e.target.src)}),c.addEventListener(`click`,()=>{o.style.display=`none`});var l=document.getElementById(`searchInput`);l.addEventListener(`keyup`,()=>{let e=l.value.toLowerCase();document.querySelectorAll(`.album-card`).forEach(t=>{(t.dataset.album||``).toLowerCase().includes(e)?t.style.display=`block`:t.style.display=`none`}),document.querySelectorAll(`.gallery-item`).forEach(t=>{(t.dataset.name||``).toLowerCase().includes(e)?t.style.display=`block`:t.style.display=`none`})});var u=document.getElementById(`galleryGrid`);u&&t.forEach(e=>{if(!e.src)return;let t=document.createElement(`div`);t.className=`gallery-item`,t.dataset.name=e.name,t.dataset.album=e.album,t.innerHTML=`
            <img src="${e.src}" alt="${e.name}">
            <div class="gallery-action">
                <button class="fav-btn">
                    ${n.some(t=>t===e.src)?`❤️`:`🤍`}
                </button>
                <button class="delete-btn">🗑️</button>
            </div>
        `,u.appendChild(t)}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.album-card`);if(!t)return;let n=t.dataset.album;document.querySelectorAll(`.gallery-item`).forEach(e=>{e.dataset.album===n?e.style.display=`block`:e.style.display=`none`}),document.querySelector(`.gallery`).scrollIntoView({behavior:`smooth`})}),document.getElementById(`showAll`).addEventListener(`click`,()=>{document.querySelectorAll(`.gallery-item`).forEach(e=>{e.style.display=`block`})});function d(){document.body.classList.toggle(`dark`);let e=document.getElementById(`themeBtn`);document.body.classList.contains(`dark`)?(localStorage.setItem(`theme`,`dark`),e.innerHTML=`☀ Light Mode`):(localStorage.setItem(`theme`,`light`),e.innerHTML=`🌙 Aktifkan Dark Mode`)}localStorage.getItem(`theme`)===`dark`&&document.body.classList.add(`dark`);function f(){let e=document.getElementById(`totalPhoto`),i=document.getElementById(`totalAlbum`),a=document.getElementById(`totalFavorite`),o=document.getElementById(`totalUpload`);e&&(e.textContent=t.length),i&&(i.textContent=r.length),a&&(a.textContent=n.length),o&&(o.textContent=t.length)}function p(){document.querySelectorAll(`.album-card`).forEach(e=>{let n=e.dataset.album,r=t.filter(e=>e.album===n).length,i=e.querySelector(`.jumlah-foto`);i&&(i.textContent=r+` Foto`)})}function m(){let e=document.getElementById(`albumSelect`);e&&(e.innerHTML=``,r.forEach(t=>{e.innerHTML+=`
        <option value="${t}">
            ${t}
        </option>
        `}))}function h(){let e=document.getElementById(`albumGrid`);e&&(e.innerHTML=``,r.forEach(n=>{let r=t.filter(e=>e.album===n).length,i=t.find(e=>e.album===n)?.src||`/album-trio-edamame/no-image.png`;e.innerHTML+=`
        <div class="album-card"
             data-name="${n}"
             data-album="${n}">

            <img src="${i}" alt="${n}">

            <h3>${n}</h3>

            <p class="jumlah-foto">${r} Foto</p>

        </div>
        `}))}function g(){let e=document.getElementById(`galleryGrid`);e&&(e.innerHTML=``,t.forEach(t=>{let r=n.includes(t.src),i=document.createElement(`div`);i.className=`gallery-item`,i.dataset.name=t.name,i.dataset.album=t.album,i.innerHTML=`
<img src="${t.src}" alt="${t.name}">
<div class="gallery-action">

<button class="fav-btn">
${r?`❤️`:`🤍`}
</button>

<button class="delete-btn">
🗑️
</button>

</div>
`,e.appendChild(i)}))}function _(e){let t=document.getElementById(`toast`);t.textContent=e,t.classList.add(`show`),setTimeout(()=>{t.classList.remove(`show`)},2500)}var v=document.querySelector(`.sidebar`),y=document.getElementById(`overlay`),b=document.getElementById(`menuBtn`);function x(){window.innerWidth<=768&&(v.classList.remove(`show`),y.classList.remove(`show`))}i(),b&&(b.onclick=()=>{v.classList.add(`show`),y.classList.add(`show`)}),y&&(y.onclick=x);