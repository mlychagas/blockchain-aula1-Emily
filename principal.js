const Blockchain = require('./blockchain');

function imprimirCadeia(cadeia) {
  for (const bloco of cadeia) {
    console.log(
      `#${bloco.indice} | ${bloco.dados} | hash: ${bloco.hash.slice(0, 10)}...`
    );
  }
}

const registro = new Blockchain();

registro.adicionar('Entrega E-001 para Ouro Preto do Oeste: em rota');
registro.adicionar('Entrega E-002 para Porto Velho: entregue');
registro.adicionar('Entrega E-003 para Ariquemes: saiu do centro');

console.log('Cadeia de entregas');
imprimirCadeia(registro.cadeia);
console.log('Cadeia é válida?', registro.ehValida());

console.log('\nTentando dados inválidos');
try {
  registro.adicionar('E1'); 
} catch (erro) {
  console.log('Erro:', erro.message);
}

try {
  registro.adicionar('a'.repeat(81)); 
} catch (erro) {
  console.log('Erro:', erro.message);
}

console.log('\nAdulterando a entrega 1');
registro.cadeia[1].dados = 'Entrega E-001 para Ouro Preto do Oeste: CANCELADA';
imprimirCadeia(registro.cadeia);
console.log('Cadeia é válida?', registro.ehValida());