const pool = require('../config/conexao');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwrSecret = process.env.JWT_SECRET;

const verificarLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token não fornecido ou inválido!'});
    };

    // Extrair token
    const token = authorization.split(' ')[1];

    try {
        // Verifica token
        const { id } = jwt.verify(token, jwrSecret);

        // Consulta o banco de dados para verificar se o usuário existe
        const consultaId = await pool.query(
            'SELECT * FROM usuarios WHERE id = $1',
            [id]
        );

        if(consultaId.rowCount === 0){
            return res.status(403).json({ message: 'Usuário não encontrado!' });
        };

        const { senha: _, ...usuarioSemSenha} = consultaId.rows[0];

        req.usuario = usuarioSemSenha;

        next();

    } catch (err) {
        console.error('Erro de autenticação:', err.message);
        return res.status(401).json({ message: 'Token inválido ou expirado!'});
    }

};

module.exports = {
    verificarLogin
};