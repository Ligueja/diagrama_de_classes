class FormatoDeElemento {
  public desenhar(): void {}
  public redimensionar(): void {}
}

class Circulo implements FormatoDeElemento {
    constructor (public raio: number) {}

    public desenhar(): void {
        console.log("O desenho do CIRCULO foi feito")
    }
    public redimensionar(): void {
        console.log(`O CIRCULO foi redimensionado com um raio de ${this.raio} cm.`)
    }
}

class Retangulo implements FormatoDeElemento {
    constructor (public comprimento: number, public altura: number) {}
    
    public desenhar(): void {
        console.log("O desenho do RETÂNGULO foi fieto")
    }
    public redimensionar(): void {
        console.log (`O RETÂNGULO foi redimensionado com um comprimento de ${this.comprimento} cm e altura de ${this.altura} cm.`)
    }
}

const circulo = new Circulo(10);
circulo.desenhar()
circulo.redimensionar()

const retangulo = new Retangulo(15, 30);
retangulo.desenhar();
retangulo.redimensionar()