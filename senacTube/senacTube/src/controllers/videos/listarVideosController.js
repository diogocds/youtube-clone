const pool = require('../../config/conexao');

const listarVideosController = async (req, res) => {
    try {
        // Consultar todos os vídeos ordenados pleo nome
        const videos = await pool.query(
            'SELECT * FROM videos ORDER BY nome'
        );

        // Retorna a lista de vídeos
        return res.status(200).json(videos.rows);

    } catch (err) {
        console.error('Erro ao listar Vídeos:', err.message);
        return res.status(500).json({ message: 'Erro ao listar Vídeos'});
    };
};

module.exports = {
    listarVideosController
};