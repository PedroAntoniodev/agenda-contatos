const form = document.getElementById('formulario-contato');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('input-nome');
    const inputNumero = document.getElementById('input-numero');

    if(nomes.includes(inputNome.value)){
        alert(`O nome : ${inputNome.value} já foi inserido na sua agenda`)
    } else if(numeros.includes(inputNumero.value)){
        alert(`O número : ${inputNumero.value} já foi inserido na sua agenda`)
    } 
    else {
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;

        inputNome.value = '';
        inputNumero.value = '';
    }
} 

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



console.log