class CorretoraDeSeguros {
    constructor (private nome: string, private numeroSuspe: number, private corretorResponsavel: string) {}
    
    public listarCorretora(): void {
        console.log(`Nome da corretora: ${this.nome};
Numero da SUSEP: ${this.numeroSuspe};
Corretor Responsável: ${this.corretorResponsavel}.`)
    }
}

class Clientes {
    constructor (private nome: string, private cpf: number, private tipoDeseguro: string, private pagamento: string) {}

    public alterarMetodoPagamento(novoPagamento: string): void {
        console.log (`O segurado: ${this.nome}, alterou o método de pagamento para: ${novoPagamento}`)
    }
}

class Seguros {
    constructor (private tipo: string, private observacao: string) {}
    
    public listarTipoDeSeguro(): void {
        console.log (`Tipo de seguro: ${this.tipo}; 
Observação ${this.observacao}.`)
    }
}

const corretora = new CorretoraDeSeguros ("LHC Corretora e Consultoria de Seguros", 123456, "Luiz Henrique Fernandes Coelho");
corretora.listarCorretora()

const clientes = new Clientes ("Julio Cezar", 9999999, "Automóvel", "Cartão de Crédito");
clientes.alterarMetodoPagamento("Débito em Conta")

const seguro = new Seguros ("Automóvel", "Na Porto Seguro, automóveis com mais de 5 anos de idade não tem aceitação.")
seguro.listarTipoDeSeguro()



