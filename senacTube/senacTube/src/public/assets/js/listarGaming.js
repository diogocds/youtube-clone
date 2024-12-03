async function carregarVideos() {
  try {
    const response = await fetch("/categorias/gaming");
    const videos = await response.json();

    const videosContainer = document.querySelector(".videos-conteudo");
    videosContainer.innerHTML = "";
    videos.forEach((video) => {
      const videoSection = document.createElement("section");
      videoSection.innerHTML = ` 
           <section class="videos-conteudo-video">
                <div class="videos-conteudo-video_youtube">
                    ${video.url}
                </div>
                <div class="videos-conteudo-video_titulo">
                   <h4>${video.nome}</h4>
                </div>
                <div class="videos-conteudo-video_descricao">
                    <h5>${video.descricao}</h5>
                </div>
            </section>
            `;
      videosContainer.appendChild(videoSection);
    });
  } catch (error) {
    console.error("Error ao carregar Videos", error);
  }
}
window.addEventListener("load", carregarVideos);
