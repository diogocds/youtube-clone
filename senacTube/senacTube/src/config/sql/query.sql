CREATE DATABASE youtube_db;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE categorias_videos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO categorias_videos (nome)
VALUES 


('Vlogs'), 
('Tecnologia'), 
('Gaming'),
('Música'),
('Entretenimento'),
('Beleza e Maquiagem'),
('Fitness e Saúde'),
('Culinária'),
('Viagens');

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    Ural TEXT NOT NULL,
    categorias_videos_id INTEGER REFERENCES categorias_videos(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
