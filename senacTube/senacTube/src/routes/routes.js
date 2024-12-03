const express = require("express");

const {
  criarUsuariosController,
} = require("../controllers/usuarios/criarUsuariosController");
const {
  listarUsuariosController,
} = require("../controllers/usuarios/listarUsuariosController");
const {
  criarVideosController,
  criarVideosWeb,
} = require("../controllers/videos/criarVideosController");
const {
  listarVideosController,
} = require("../controllers/videos/listarVideosController");
const {
  logarUsuariosController,
  logarUsuariosWeb,
} = require("../controllers/usuarios/logarUsuariosController");
const { verificarLogin } = require("../middleware/verificarLogin");
const {
  listarCategoriasVideosController,
} = require("../controllers/videos/listarCategoriasVideosController");
const {
  listarCategoriasMusicasController,
  listarMusicasWeb,
} = require("../controllers/videos/listarCategoriasMusicasController");
const {
  listarGamingWeb,
  listarCategoriasGamingController,
} = require("../controllers/videos/listarCategoriasGamingController");

const rotas = express();

// Web
rotas.get("/login", logarUsuariosWeb);
rotas.get("/videos", criarVideosWeb);
rotas.get("/musicas", listarMusicasWeb);
rotas.get("/gamings", listarGamingWeb);

// Controller
rotas.post("/usuarios", criarUsuariosController);
rotas.get("/usuarios", listarUsuariosController);
rotas.post("/login", logarUsuariosController);

rotas.get("/admin/categorias", listarCategoriasVideosController);
rotas.get("/categorias/musica", listarCategoriasMusicasController);
rotas.get("/categorias/gaming", listarCategoriasGamingController);
rotas.get("/admin/videos", listarVideosController);

// rotas.use(verificarLogin);

rotas.post("/admin/videos", criarVideosController);

module.exports = rotas;
