(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=JSON.parse(localStorage.getItem(`photos`))||[],t=JSON.parse(localStorage.getItem(`favorites`))||[],n=JSON.parse(localStorage.getItem(`albums`))||[`Trio Edamame`,`Kenangan`,`Edamamers`];document.querySelector(`#app`).innerHTML=`
<div class="container">

  <!-- Sidebar -->
  <aside class="sidebar">

    <div class="logo">
      <img src="/logo.png" class="logo-img" alt="Logo">
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
      <img src="/footer.png" alt="Footer">
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

        <div class="navbar-left">

            <input
                type="text"
                id="searchInput"
                placeholder="Cari foto atau album...">

        </div>

        <div class="navbar-right">

            <img
                src="${localStorage.getItem(`profilePhoto`)||`/profile.png`}"
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

          <button>Jelajahi Galeri</button>
        </div>

        <div class="hero-image">
          <img src="/Hero.png" alt="Hero">
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
`,document.getElementById(`dashboard`).addEventListener(`click`,()=>{document.getElementById(`content`).innerHTML=`

    <!-- Hero -->
    <div class="hero">

        <div class="hero-text">
            <h1>Welcome to</h1>
            <h2>Edamamers Gallery</h2>
            <p>Simpan setiap momen berharga bersama Trio Edamame.</p>

            <button id="heroBtn">Jelajahi Galeri</button>

        </div>

        <div class="hero-image">
            <img src="/Hero.png" alt="Hero">
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

    `,f(),d(),p(),l(),r()}),document.getElementById(`album`).addEventListener(`click`,()=>{let n=[...new Set(e.map(e=>e.album))],r=`
    <section class="album-page">

        <h1>📁 Album Edamamers</h1>

        <p>Pilih album untuk melihat koleksi foto.</p>

        <div class="album-grid">
    `;n.length===0?r+=`<p>Belum ada album.</p>`:n.forEach(t=>{let n=e.filter(e=>e.album===t).length,i=e.find(e=>e.album===t)?.src||`/foto1.png`;r+=`
    <div class="album-card"
         data-album="${t}">

        <img src="${i}" alt="${t}">

        <h3>${t}</h3>

        <p class="jumlah-foto">${n} Foto</p>

    </div>
    `}),r+=`
        </div>
    </section>
    `,document.getElementById(`content`).innerHTML=r,document.addEventListener(`click`,function(n){let r=n.target.closest(`.album-card`);if(!r)return;let i=r.dataset.album,a=e.filter(e=>e.album===i),o=`
    <section class="gallery-page">

        <button id="backAlbum">← Kembali</button>

        <h1>${i}</h1>

        <div class="gallery-grid">
    `;a.length===0?o+=`<p>Belum ada foto.</p>`:a.forEach(e=>{o+=`
            <div class="gallery-item">

                <img src="${e.src}" alt="${e.name}">

                <div class="gallery-action">

                    <button class="fav-btn">
                        ${t.includes(e.src)?`❤️`:`🤍`}
                    </button>

                    <button class="delete-btn">
                        🗑️
                    </button>

                </div>

            </div>
            `}),o+=`
        </div>
    </section>
    `,document.getElementById(`content`).innerHTML=o,document.getElementById(`backAlbum`).onclick=()=>{document.getElementById(`album`).click()}})}),document.getElementById(`gallery`).addEventListener(`click`,()=>{let n=`
    <section class="gallery-page">

        <h1>🖼 Edamamers Gallery</h1>

        <p>Koleksi foto terbaik Trio Edamame.</p>

        <div class="gallery-grid">
    `;e.forEach(e=>{n+=`
            <div class="gallery-item"
                 data-name="${e.name}"
                 data-album="${e.album}">

                <img src="${e.src}" alt="${e.name}">

                <div class="gallery-action">

                    <button class="fav-btn">
                        ${t.includes(e.src)?`❤️`:`🤍`}
                    </button>

                    <button class="delete-btn">
                        🗑️
                    </button>

                </div>

            </div>
        `}),n+=`
        </div>
    </section>
    `,document.getElementById(`content`).innerHTML=n}),document.getElementById(`upload`).addEventListener(`click`,()=>{let e=document.querySelector(`.upload`);e?e.scrollIntoView({behavior:`smooth`}):(document.getElementById(`dashboard`).click(),setTimeout(()=>{document.querySelector(`.upload`).scrollIntoView({behavior:`smooth`})},100))}),document.getElementById(`favorite`).addEventListener(`click`,()=>{let n=`
    <section class="favorite-page">

    <h1>❤️ Foto Favorit</h1>

    <div class="favorite-grid">
    `;t.length==0?n+=`<p class="empty-favorite">
        Belum ada foto favorit.
        </p>`:t.filter(t=>e.some(e=>e.src===t)).forEach(e=>{e&&(n+=`
        <div class="gallery-item">
            <img src="${e}">
        </div>
    `)}),n+=`</div></section>`,document.getElementById(`content`).innerHTML=n}),document.getElementById(`profile`).addEventListener(`click`,()=>{document.getElementById(`content`).innerHTML=`

  <section class="profile-page">

  <div class="profile-card">

  <img src="${localStorage.getItem(`profilePhoto`)||`/profile.png`}" id="profilePreview" class="profile-photo">

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

  `,document.getElementById(`saveProfile`).addEventListener(`click`,()=>{let e=document.getElementById(`newName`).value,t=document.getElementById(`newPhoto`).files[0];if(e!=``&&(localStorage.setItem(`profileName`,e),document.getElementById(`profileName`).innerHTML=e,document.getElementById(`navbarUser`).innerHTML=`👤 Halo, `+e+`!`),t){let e=new FileReader;e.onload=function(e){localStorage.setItem(`profilePhoto`,e.target.result),f(),d(),l(),document.getElementById(`gallery`).click()},e.readAsDataURL(t)}alert(`Profil berhasil disimpan!`)})}),document.getElementById(`setting`).addEventListener(`click`,()=>{document.getElementById(`content`).innerHTML=`

    <section class="setting-page">

        <h1>⚙ Pengaturan</h1>

        <div class="setting-card">

            <h3>Tampilan Aplikasi</h3>

            <button id="themeBtn">
                🌙 Aktifkan Dark Mode
            </button>

        </div>

    </section>

    `;let e=document.getElementById(`themeBtn`);localStorage.getItem(`theme`)===`dark`&&(e.innerHTML=`☀ Light Mode`),e.addEventListener(`click`,c)}),document.getElementById(`about`).addEventListener(`click`,()=>{document.getElementById(`content`).innerHTML=`

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

    `});function r(){let t=document.getElementById(`uploadBtn`),r=document.getElementById(`uploadFile`);document.getElementById(`galleryGrid`);let i=document.getElementById(`albumSelect`);t&&(i.innerHTML=``,n.forEach(e=>{i.innerHTML+=`
            <option value="${e}">
                ${e}
            </option>
        `}),t.onclick=()=>{let t=r.files[0];if(!t){alert(`Silakan pilih foto!`);return}let n=new FileReader;n.onload=function(n){e.push({src:n.target.result,album:i.value,name:t.name}),localStorage.setItem(`photos`,JSON.stringify(e)),p(),f(),l(),alert(`Foto berhasil diupload!`)},n.readAsDataURL(t)})}uploadBtn.addEventListener(`click`,()=>{let t=uploadFile.files[0];if(!t){alert(`Silakan pilih foto terlebih dahulu!`);return}let n=new FileReader;n.onload=function(n){let i=n.target.result,a=document.getElementById(`albumSelect`).value;e.push({src:i,album:a,name:t.name}),localStorage.setItem(`photos`,JSON.stringify(e));let o=document.createElement(`div`);o.className=`gallery-item`,o.dataset.name=t.name,o.dataset.album=a,o.innerHTML=`
      <img src="${i}" alt="${t.name}">

      <div class="gallery-action">
        <button class="fav-btn">🤍</button>
        <button class="delete-btn">🗑️</button>
      </div>
    `,galleryGrid.appendChild(o),uploadFile.value=``,alert(`Foto berhasil diupload!`),f(),d(),l(),u(),r(),document.getElementById(`gallery`).click()},n.readAsDataURL(t)}),document.addEventListener(`click`,e=>{if(e.target.id===`heroBtn`||e.target.textContent===`Jelajahi Galeri`){let e=document.querySelector(`.gallery`);e&&e.scrollIntoView({behavior:`smooth`})}}),document.getElementById(`addAlbum`).addEventListener(`click`,()=>{let e=document.getElementById(`albumName`).value.trim();if(e===``){alert(`Masukkan nama album!`);return}if(n.includes(e)){alert(`Album sudah ada!`);return}n.push(e),localStorage.setItem(`albums`,JSON.stringify(n)),document.getElementById(`albumName`).value=``,f(),d(),l()}),document.addEventListener(`click`,function(n){if(n.target.classList.contains(`fav-btn`)){let e=n.target.closest(`.gallery-item`).querySelector(`img`).src;n.target.textContent==`🤍`?(n.target.textContent=`❤️`,t.includes(e)||t.push(e)):(n.target.textContent=`🤍`,t=t.filter(t=>t!==e)),localStorage.setItem(`favorites`,JSON.stringify(t)),l()}if(n.target.classList.contains(`delete-btn`)){if(!confirm(`Hapus foto ini?`))return;let r=n.target.closest(`.gallery-item`),i=r.querySelector(`img`).src;t=t.filter(e=>e!==i),e=e.filter(e=>e.src!==i),localStorage.setItem(`favorites`,JSON.stringify(t)),localStorage.setItem(`photos`,JSON.stringify(e)),r.remove(),f(),d(),l(),document.getElementById(`favorite`).classList.contains(`active`)&&document.getElementById(`favorite`).click(),document.getElementById(`gallery`).classList.contains(`active`)&&document.getElementById(`gallery`).click()}});var i=document.getElementById(`preview`),a=document.getElementById(`previewImage`),o=document.getElementById(`closePreview`);document.addEventListener(`click`,e=>{e.target.tagName===`IMG`&&e.target.closest(`.gallery-item`)&&(i.style.display=`flex`,a.src=e.target.src)}),o.addEventListener(`click`,()=>{i.style.display=`none`});var s=document.getElementById(`searchInput`);s.addEventListener(`keyup`,()=>{let e=s.value.toLowerCase();document.querySelectorAll(`.album-card`).forEach(t=>{(t.dataset.name||``).toLowerCase().includes(e)?t.style.display=`block`:t.style.display=`none`}),document.querySelectorAll(`.gallery-item`).forEach(t=>{(t.dataset.name||``).toLowerCase().includes(e)?t.style.display=`block`:t.style.display=`none`})}),e.forEach(e=>{if(!e.src)return;let n=document.createElement(`div`);n.className=`gallery-item`,n.dataset.name=e.name,n.dataset.album=e.album,n.innerHTML=`
        <img src="${e.src}" alt="${e.name}">

        <div class="gallery-action">

            <button class="fav-btn">
                ${t.includes(e.src)?`❤️`:`🤍`}
            </button>

            <button class="delete-btn">
                🗑️
            </button>

        </div>
    `,galleryGrid.appendChild(n)}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.album-card`);if(!t)return;let n=t.dataset.album;document.querySelectorAll(`.gallery-item`).forEach(e=>{e.dataset.album===n?e.style.display=`block`:e.style.display=`none`}),document.querySelector(`.gallery`).scrollIntoView({behavior:`smooth`})}),document.getElementById(`showAll`).addEventListener(`click`,()=>{document.querySelectorAll(`.gallery-item`).forEach(e=>{e.style.display=`block`})});function c(){document.body.classList.toggle(`dark`);let e=document.getElementById(`themeBtn`);document.body.classList.contains(`dark`)?(localStorage.setItem(`theme`,`dark`),e.innerHTML=`☀ Light Mode`):(localStorage.setItem(`theme`,`light`),e.innerHTML=`🌙 Aktifkan Dark Mode`)}localStorage.getItem(`theme`)===`dark`&&document.body.classList.add(`dark`);function l(){let n=document.querySelectorAll(`.gallery-item`).length,r=document.querySelectorAll(`.album-card`).length,i=t.length,a=e.length;document.getElementById(`totalPhoto`).textContent=n,document.getElementById(`totalAlbum`).textContent=r,document.getElementById(`totalFavorite`).textContent=i,document.getElementById(`totalUpload`).textContent=a}function u(){document.querySelectorAll(`.album-card`).forEach(t=>{let n=t.dataset.album,r=e.filter(e=>e.album===n).length,i=t.querySelector(`.jumlah-foto`);i&&(i.textContent=r+` Foto`)})}function d(){let e=document.getElementById(`albumSelect`);e&&(e.innerHTML=``,n.forEach(t=>{e.innerHTML+=`
        <option value="${t}">
            ${t}
        </option>
        `}))}function f(){let t=document.getElementById(`albumGrid`);t&&(t.innerHTML=``,n.forEach(n=>{let r=e.filter(e=>e.album===n).length,i=e.find(e=>e.album===n)?.src||`/foto1.png`;t.innerHTML+=`
        <div class="album-card"
             data-name="${n}"
             data-album="${n}">

            <img src="${i}" alt="${n}">

            <h3>${n}</h3>

            <p class="jumlah-foto">${r} Foto</p>

        </div>
        `}))}function p(){let n=document.getElementById(`galleryGrid`);n&&(n.innerHTML=``,e.forEach(e=>{let r=t.includes(e.src);n.innerHTML+=`
        <div class="gallery-item"
             data-name="${e.name}"
             data-album="${e.album}">

            <img src="${e.src}" alt="${e.name}">

            <div class="gallery-action">

                <button class="fav-btn">
                    ${r?`❤️`:`🤍`}
                </button>

                <button class="delete-btn">
                    🗑️
                </button>

            </div>

        </div>
        `}))}f(),d(),p(),l(),u();