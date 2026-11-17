const Bloco = require('./bloco');

class Blockchain {
  constructor() {
    this.cadeia = [new Bloco(0, 'Bloco Gênese', '0')];
  }

  adicionar(dados) {
    const ultimo = this.cadeia[this.cadeia.length - 1];
    const novo = new Bloco(this.cadeia.length, dados, ultimo.hash);
    this.cadeia.push(novo);
  }

  ehValida() {
    for (let i = 1; i < this.cadeia.length; i++) {
      const atual = this.cadeia[i];
      const anterior = this.cadeia[i - 1];

      if (atual.hash !== atual.calcularHash()) {
        return false;
      }
      if (atual.hashAnterior !== anterior.hash) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;