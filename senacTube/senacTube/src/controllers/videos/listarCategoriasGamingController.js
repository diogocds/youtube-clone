const pool = require("../../config/conexao");
const path = require("path");

const listarGamingWeb = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public", "gaming.html"));
};

const listarCategoriasGamingController = async (req, res) => {
  try {
    // Consultar todas os videos da categoria musica
    const categorias = await pool.query(
      "SELECT * FROM videos WHERE categorias_videos_id = 3"
    );

    // Retorna a lista de musicas
    return res.status(200).json(categorias.rows);
  } catch (err) {
    console.error("Erro ao listar Categorias dos videos:", err.message);
    return res
      .status(500)
      .json({ message: "Erro ao listar Categorias dos videos" });
  }
};

module.exports = {
  listarCategoriasGamingController,
  listarGamingWeb,
};
