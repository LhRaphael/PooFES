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

async function processoUsuario(treino) {
    let usuario_atual = await usuarioAtual();
    usuario_atual.treinos.push(treino);

    let TODOS_USUARIOS = await usuarios(); // Renomeei para clareza

    // Atualiza a lista de usuários com o usuário modificado
    const usuariosAtualizados = TODOS_USUARIOS.map(u => {
        if (u.nome === usuario_atual.nome) {
            return usuario_atual; // Substitui o usuário antigo pelo atualizado
        }
        return u; // Mantém os outros usuários como estão
    });

    save(usuariosAtualizados); // Envia a lista ATUALIZADA
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
export async function exibirTreinos(){
    let area = document.getElementById("treinoConteudo");
    let usuario = await usuarioAtual()
    console.log(usuario);
    let treinos = usuario.treinos;
    if(treinos.length > 0){
        for(let i = 0; i < treinos.length; i++){
            let treino = treinos[i];
            let secao = document.createElement("section");
            secao.setAttribute("class", "treino");
            secao.innerHTML = `
                <h2>${treino.nome}</h2>
                <p>Series: ${treino.series}</p>
                <p>Repetições: ${treino.repeticoes}</p>
                <p>Categoria: ${treino.categoria}</p>
                <p>Data: ${treino.data}</p>
            `;
            area.appendChild(secao);
        }
    }
    else{
        area.innerHTML = "<h2>Nenhum treino cadastrado</h2>";
    }
}



// TODO: Implementar a função para cadastrar um treino
export function cadastrarTreino(){
    let area = document.getElementById("treinosDiv");

    let ativado = document.getElementById("adicionarButton");
    ativado.style.display = "none"; // para impedir que o botão de adicionar treino apareça mais de uma vez
    
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
        let data = new Date();
        treino.setData(data.toLocaleDateString())

        processoUsuario(treino)
        secao.remove()
        ativado.style.display = "block";
    })

    let cancelar = document.createElement('button')
    cancelar.textContent = "Cancelar"
    cancelar.addEventListener('click',()=>{
        secao.remove()
        ativado.style.display = "block";
    })  


    secao.appendChild(nomeInput);
    secao.appendChild(seriesInput);
    secao.appendChild(repeticoesInput);
    secao.appendChild(categorias);
    secao.appendChild(confirmar)
    secao.appendChild(cancelar);
    area.appendChild(secao);
}

