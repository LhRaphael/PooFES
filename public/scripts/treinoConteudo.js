import { Treino } from '../model/Treino.js'


async function usuarios(){
    const url = 'http://localhost:3000/coletarLocalStorage';  // URL do servidor

    try {
      const response = await fetch(url);
      const data = await response.json();  // Obtém a resposta como texto
      return data;  // Retorna o texto recebido
    } catch (error) {
      console.error('Erro ao obter o dado do servidor:', error);
      throw error;  // Lança o erro caso algo dê errado
    }
}


async function usuarioAtual(){
    const url = 'http://localhost:3000/coletarUsuario';  // URL do servidor

    try {
      const response = await fetch(url);
      const data = await response.json();  // Obtém a resposta como texto
      return data;  // Retorna o texto recebido
    } catch (error) {
      console.error('Erro ao obter o dado do servidor:', error);
      throw error;  // Lança o erro caso algo dê errado
    }
}

async function processoUsuario(treino){
    let usuario_atual = await usuarioAtual()
    console.log(usuario_atual)
    usuario_atual.treinos.push(treino)

    let USUARIOS = await usuarios()
    
    USUARIOS.map(u => u.nome === usuario_atual.nome ? usuario_atual : u)
    console.log(USUARIOS)
    save(USUARIOS)
}

function save(array){
    fetch('http://localhost:3000/atualizarUsuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Definindo o tipo de conteúdo como JSON
        },
        body: JSON.stringify(array) // Convertendo o array de objetos para JSON
        })
        .then(response => response.text()) 
        .then(data => {
            console.log('Resposta do servidor:', data); // Exibe a resposta processada do servidor
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
        });
}



// TODO: Implementar a função para exibir os treinos cadastrados
export function exibirTreinos(){


}



// TODO: Implementar a função para cadastrar um treino
export function cadastrarTreino(){
    let area = document.getElementById("treinosDiv");
    let treino = new Treino();
    let secao = document.createElement("section");
    
    let nomeInput = document.createElement("input");
    nomeInput.setAttribute("type", "text");
    nomeInput.setAttribute("placeholder", "Nome do treino");
    
    let seriesInput = document.createElement("input");
    seriesInput.setAttribute("type", "number");
    seriesInput.setAttribute("placeholder", "Total de séries");
    
    let repeticoesInput = document.createElement("input");
    repeticoesInput.setAttribute("type", "number");
    repeticoesInput.setAttribute("placeholder", "Total de repetições");

    
    let categorias = document.createElement('select');
    for(let i = 0; i < treino.categorias.length; i++){
        let option = document.createElement('option');
        option.value = treino.categorias[i];
        option.text = treino.categorias[i];
        categorias.appendChild(option);
    }
    
    let confirmar = document.createElement('button')
    confirmar.textContent = "Registrar"
    confirmar.addEventListener('click',()=>{
        treino.setNome(nomeInput.value)
        treino.setSeries(Number(seriesInput.value))
        treino.setRepeticoes(Number(repeticoesInput.value))
        treino.setCategoria(categorias.value)

        processoUsuario(treino)
        secao.remove()
    })


    secao.appendChild(nomeInput);
    secao.appendChild(seriesInput);
    secao.appendChild(repeticoesInput);
    secao.appendChild(categorias);
    secao.appendChild(confirmar)
    area.appendChild(secao);
}

