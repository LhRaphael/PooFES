const { Usuario } = require("../model/Usuario.js")

const fs = require('fs');
const path = require('path');


const FILE_PATH = path.resolve(__dirname, '../../dados.json');

function criarUsuario(nomeUser, senha, idade, peso, altura){
    const USUARIO = new Usuario(nomeUser, senha, idade, peso, altura);
    const USUARIOS = getLocalStorage();
    USUARIOS.push(USUARIO)
    atualizarUsuarios(JSON.stringify(USUARIOS));
    
}

function validarUsuario(nomeUser, senha){
    const USUARIOS = getLocalStorage();
    const usuario = USUARIOS.find(usuario => usuario.nome === nomeUser && usuario.senha === senha);
    return usuario;
}

function existeUsuario(nome){
    const USUARIOS = getLocalStorage();
    const usuario = USUARIOS.find(usuario => usuario.nome === nome);
    return usuario
    
}

function alterarSenha(nomeUser, senha){
    const USUARIOS = getLocalStorage();
    const usuario = USUARIOS.find(usuario => usuario.nome === nomeUser);
    if(usuario){
        usuario.senha = senha;
        atualizarUsuarios(JSON.stringify(USUARIOS));
    }
}

// Lê os usuários do arquivo
function getLocalStorage() {
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        return [];
    }
}

// Atualiza o arquivo com a lista de usuários
function atualizarUsuarios(usuarios) {
    try {
        fs.writeFileSync(FILE_PATH, usuarios, 'utf-8');
    } catch (err) {
        console.error('Erro ao salvar no arquivo:', err);
    }
}


module.exports = {criarUsuario, validarUsuario, existeUsuario, alterarSenha, atualizarUsuarios, getLocalStorage}
