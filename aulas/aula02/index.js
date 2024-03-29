const readline = require("readline-sync");

const controlador = require('./controlador')

const produtos = [];

function listar() {
  produtos.forEach((produto) => console.log(produto.nome, "-", produto.preco));
}

function criar() {
  const nome = readline.question("Entre com o nome do produto ");
  const preco = readline.question("Entre com  o preco do produto");
  const novo = { nome, preco };
  produtos.push(novo);
}

function menu() {
  console.log("1. Listar");
  console.log("2. Criar");
  console.log("3. Buscar");
  console.log("4. Atualizar");
  console.log("5. Remover");
  console.log("6. Sair");
}

function buscar() {
  const nome = readline.question("Entre com o nome do produto:");
  const buscou = produtos.find((produto) => produto.nome === nome);
  if (buscou) {
    console.log(buscou.nome, "-", buscou.preco);
  } else {
    console.log("Produto não localizado");
  }
}
function atualizar() {
  const nome = readline.question("Entre com o nome do produto:");
  const buscou = produtos.find((produto) => produto.nome === nome);
  if (buscou) {
    const preco = readline.question("Entre com o novo preco");
    buscou.preco = preco;
  } else {
    console.log("Produto não localizado");
  }
}

function remover() {
  const nome = readline.question("Entre com o nome do produto: ");
  const posicao = produtos.findIndex((produto) => produto.nome === nome);
  if (posicao >= 0) {
    produtos.splice(posicao, 1);
  } else {
    console.log("Produto não localizado");
  }
}




function escolherOpcao(opcao) {
  switch (opcao) {
    case "1": controlador.listar();
      break;
    case "2": controlador.criar();
      break;
    case "3": controlador.buscar();
      break;
    case "4": controlador.atualizar();
      break;
    case "5": controlador.remover();
      break;
    case "6":
      process.exit(0);
    default:
      CSSConditionRule.log("Opcao Invalida");
  }
  readline.question("Pressione ENTER para continuar...");
}



function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opcao:  ");
    escolherOpcao(opcao);
  }
}

main();
