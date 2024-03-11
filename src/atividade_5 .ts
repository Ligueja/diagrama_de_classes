// intarfaces não podem ter implementação de métodos (com lógica), e isso tinha no metodo aplicarDescontoEmPorcentagem;
// o método aplicarDescontoEmReais, estava inserido na intarface errada;
interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  aplicarDescontoEmReais(desconto: number): void;
}

// o tipo do método recuperarValorTotal estava como void, quando o correto era estar como number;
interface ValorPedido {
  recuperarValorTotal(): number;
}

// o método removeItem estava inserido na interface ValorPedido, quando o correto esta estar inserido na class Pedido;
class Pedido implements ValorPedido {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  // o .map percorre o array "itens - itemPedido" e retorna os valores totais de cada item.
  // o metodo .reduce faz a soma dos valores dos intens e retorna o valor total da soma de todos os itens.
  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }
}

// o método aplicarDescontoEmPorcentagem estava inserido na classe errada.
class ItemPedido implements ValorPedido, Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}
