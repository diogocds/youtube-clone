const pool = require('../../config/conexao');

const listarCategoriasVideosController = async (req, res) => {
    try {
        // Consultar todas as categorias dos vídeos ordenadas pelo nome
        const categorias = await pool.query(
            'SELECT * FROM categorias_videos ORDER BY nome'
        );

        // Retorna a lista de categorias
        return res.status(200).json(categorias.rows);

    } catch (err) {
        console.error('Erro ao listar Categorias:', err.message);
        return res.status(500).json({ message: 'Erro ao listar Categorias'});
    };
};

module.exports = {
    listarCategoriasVideosController
};