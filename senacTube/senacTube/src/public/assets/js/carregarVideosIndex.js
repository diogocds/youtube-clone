async function carregarVideos() {
  try {
    const response = await fetch("/admin/videos"); // Faz a requisição ao endpoint
    const videos = await response.json();

    // Seleciona o container onde os vídeos serão inseridos
    const videosContainer = document.querySelector(".videos-conteudo");

    // Limpa o cantainer antes de adicionar os vídeos
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

      // Adiciona o vídeo ao container principal
      videosContainer.appendChild(videoSection);
    });
  } catch (error) {
    console.error("Erro ao carregar vídeos", error);
  }
}

// Carregar os vídeos quando a página carregar
window.addEventListener("load", carregarVideos);

module.exports = {
  carregarVideos,
};
