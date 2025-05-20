const { criarUsuario } =  require('./public/scripts/criarUsuario.js');

const express = require('express');
const path = require('path');  // Importa o módulo path
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.urlencoded({ extended: true })); // para interpretar dados de formulários


// TODO: Criar um sistema de autenticação mais robusto
app.post('/tratamento', (req, res) => {
  const nome = req.body.nomeInput;
  const senha = req.body.senhaInput;


  if (nome === 'usuario' && senha === '1234') {
    res.redirect('/templates/base.html');
  } else if (nome === 'admin' && senha === 'admin') {
  } else {
    res.send('Usuário ou senha inválidos.');
  }
});


//TODO: Criar um sistema de autenticação mais robusto
app.post('/mudarSenha', (req, res)=> {
  const senha = req.body.mudarSenhaInput;
  const usuario = req.body.usuarioSenhaInput;
  console.log(usuario, senha);

 if(usuario){
    res.redirect('index.html');
 }
 else{
    res.send(`<script>alert("Usuário ou senha inválidos.")</script>`);
 }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


app.post('/cadastrarUsuario', (req, res)=>{
  const nome = req.body.nomeInput
  const idade = req.body.idadeInput
  const peso = req.body.pesoInput
  const altura = req.body.alturaInput
  const senha = req.body.senhaInput
  criarUsuario(nome, senha, idade, peso, altura)
  res.redirect('index.html')
})