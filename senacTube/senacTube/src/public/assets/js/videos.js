// Verifica se o usuário está autenticado
function checarAutorizacao() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Você precisa esta logado para acessar esta página.");
    window.location.href = "/login"; // Redireciona para a página de login
  }
}

// Faz logout e limpa o token
function logout() {
  localStorage.removeItem("token");
  alert("Você foi desconectado.");
  window.location.href = "/login";
}

async function carregarCategorias() {
  try {
    const response = await fetch("/admin/categorias");
    const categorias = await response.json();

    // Populando o select de categorias
    const selectCategoria = document.querySelector(
      'select[name="categorias_videos_id"]'
    );
    categorias.forEach((categoria) => {
      const option = document.createElement("option");
      option.value = categoria.id;
      option.textContent = categoria.nome;
      selectCategoria.appendChild(option);
    });
  } catch (error) {
    console.error("Erro ao carregar categorias:", erro);
  }
}

// Carregar as categorias quando a página carregar
window.addEventListener("load", carregarCategorias);

// Interceptar o envio do formulário
document
  .getElementById("video-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target; // Referência direta ao formulário
    const formData = new FormData(form); // Usa o formulário como contexto
    const token = localStorage.getItem("token"); // Recupera o token do Local Storage

    if (!token) {
      alert("Nunhum token de autenticação encontrado.");
      return;
    }

    try {
      const response = await fetch("/admin/videos", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Envia o Token no cabeçalho Authorization
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)), // Converte FormData diretamente para objeto JSON
      });

      if (response.ok) {
        const data = await response.json();
        alert("Vídeo cadastrado com sucesso!");
        form.reset(); // Limpa o formulário após o sucesso
      } else {
        const error = await response.json();
        alert(`Erro: ${error.message || "Erro ao cadastrar vídeo."}`);
      }
    } catch (err) {
      alert("Erro ao se conectar ao servidor.");
    }
  });

module.exports = {
  checarAutorizacao,
  carregarCategorias,
  logout,
};
