const pool = require('../../config/conexao');
const path = require('path');

// Rota para carregar a página do formulário de Vídeos
const criarVideosWeb = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'videos.html'));
}

const criarVideosController = async (req, res) => {
    const { nome, descricao, url, categorias_videos_id } = req.body;

    // Validação dos campos de entrada
    if(!nome || !nome.trim()){
        return res.status(400).json({ message: 'O campo Nome é obrigatório.' })
    };

    if(!descricao || !descricao.trim()){
        return res.status(400).json({ message: 'O campo Descrição é obrigatório.' })
    };

    if(!url || !url.trim()){
        return res.status(400).json({ message: 'O campo URL é obrigatório.' })
    };

    if(!categorias_videos_id || !categorias_videos_id.trim()){
        return res.status(400).json({ message: 'O campo Categoria do Vídeo é obrigatório.' })
    };

    try {
        // Insere o novo Vídeo do banco de dados
        const resultado = await pool.query(
            'INSERT INTO videos (nome, descricao, url, categorias_videos_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, descricao, url, categorias_videos_id]
        );

        // Retorana o vídeo criado
        return res.status(201).json(resultado.rows[0]);

    } catch (err) {
        console.error('Erro ao criar Vídeo:', err.message);
        return res.status(500).json({ message: 'Erro ao criar Vídeo'});
    }
};

module.exports = {
    criarVideosController,
    criarVideosWeb
}