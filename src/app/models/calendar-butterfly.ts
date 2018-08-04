export interface AsaInferior {
        ativo: string;
        codigo: string;
        serie: string;
        strike: string;
        tipo: string;
        valorAsk: number;
        valorBid: number;
        valorUltimoNegocio: number;
        sdtVcto: Date;
}
export interface AsaSuperior {
        ativo: string;
        codigo: string;
        serie: string;
        strike: string;
        tipo: string;
        valorAsk: number;
        valorBid: number;
        valorUltimoNegocio: number;
        sdtVcto: Date;
}

export interface Miolo {
        ativo: string;
        codigo: string;
        serie: string;
        strike: string;
        tipo: string;
        valorAsk: number;
        valorBid: number;
        valorUltimoNegocio: number;
        sdtVcto: Date;
}
export interface CalendarButerfly {
        $key: number;
        Serie: string;
        distanciaAsa: number;
        preco_entrada_atual: number;
        preco_entrada_parametro: number;
        preco_saida_atual: number;
        asaInferior: AsaInferior;
        asaSuperior: AsaSuperior;
        miolo: Miolo;
}