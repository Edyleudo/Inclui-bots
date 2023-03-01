let original = [];
let nomesOriginal = [];
var novoArray = [];
let arrayBots = [551133350237, 5511999910621, 5521999816059, 556140040001, 5511974627106, 551128326088]
let cont = 0;
let vetorOriginal = document.getElementById("textNoBots").value
var frases = ["olá", "oi", "bom dia", "tudo bem?", "fala man", "e ai, contas as novas", "ei, bora sair", "como andam as coisas?"];


function receberLista(){
var ListaEnviada = document.getElementById("textNoBots").value;
var NomesEnviados = document.getElementById("nomeNoBots").value;
original = ListaEnviada.split("\n")
nomesOriginal = NomesEnviados.split("\n")

for (let i = 0; i < original.length; i++) {
    let telefone = [];
    let nome = [];
    if (cont == 10) {
        for (let j = 0; j < arrayBots.length; j++) {
            telefone = arrayBots[j].toString().substr(2);
            nome = "zé";

            let Json = {
                nome: nome,
                Telefone: telefone,
                mensagem: sorteiaFrases()
            }
        
            novoArray.push(Json);
        }
        cont = 0;
        i--;
    }
    else {
        telefone = original[i].toString().substr(2);
        nome = nomesOriginal[i];
        cont++;

        let Json = {
            nome: nome,
            Telefone: telefone,
            mensagem: "Olá! Tudo bem?\\nMe chamo Vanessa, sou consultora de Planos de Saúde!!\\n\\nNós estamos com ótimos preços! Trabalhamos com redução e aproveitamento de carência! Temos todos os planos regulamentados pela ANS.\\n• Amil\\n• Porto Seguron\\n• Unimed\\n• Golden cross\\n• Notredame\\n• Intermédica etc...\\n\\nGostaria de dar uma olhada com um de nossos especialistas ?\\n\\nEscolha uma opção para eu te ajudar:\\n\\n1 - Sim, desejo receber uma proposta personalizada;\\n2 - Não tenho interesse, desejo sair da lista de clientes interessados"
        }
    
        novoArray.push(Json);
    }

}


document.getElementById("textBots").value = JSON.stringify(novoArray);

}

function sorteiaFrases(){

    return frases[Math.floor(Math.random() * frases.length)]
}