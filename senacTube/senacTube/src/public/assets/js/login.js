// Redireciona para a página vídeos se já estiver autenticado
if (localStorage.getItem("token")) {
  window.location.href = "/videos";
}

// URL backend
const API_URL = "http://localhost:3000/login";

// Realizar Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token); // Armazena o token
        alert("Login ralizado com sucesso!");
        window.location.href = "/videos"; // Redireciona para a página vídeos
      } else {
        alert("Token não encontrado na resposta.");
      }
    } else {
      const error = await response.json();
      alert(`Erro: ${erro.message || error.error}`);
    }
  } catch (error) {
    alert("Erro ao se conectar ao servidor.");
  }
});
