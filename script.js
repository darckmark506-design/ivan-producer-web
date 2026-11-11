
// CONFIGURACIÓN DEL CANAL
const CHANNEL_URL = "https://www.youtube.com/@TU_CANAL";

// AGREGA AQUÍ TUS VIDEOS DE YOUTUBE
const VIDEOS = [
  {
    title: "ETERNAL ENERGY - LENTO VIOLENTO",
    id: "REEMPLAZAR_ID_1"
  },
  {
    title: "MI NUEVA PRODUCCIÓN",
    id: "REEMPLAZAR_ID_2"
  },
  {
    title: "DJ SET - IVAN PRODUCER",
    id: "REEMPLAZAR_ID_3"
  }
];

// ENLACES DEL CANAL
document.getElementById("subscribeLink").href = CHANNEL_URL;
document.getElementById("channelLink").href = CHANNEL_URL;

// AÑO AUTOMÁTICO
document.getElementById("year").textContent =
  new Date().getFullYear();

// GALERÍA DE VIDEOS
const videoGrid = document.getElementById("videoGrid");

const validVideos = VIDEOS.filter(video =>
  /^[a-zA-Z0-9_-]{11}$/.test(video.id)
);

if (validVideos.length === 0) {
  videoGrid.innerHTML = `
    <div class="video-placeholder">
      <h3>PRÓXIMAMENTE</h3>
      <p>Muy pronto encontrarás aquí los videos de IVAN PRODUCER.</p>
    </div>
  `;
} else {
  videoGrid.innerHTML = validVideos.map(video => `
    <article class="video-card">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${video.id}"
        title="${video.title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <h3>${video.title}</h3>
    </article>
  `).join("");
}
