import {ApiReceitaDespesa} from './ApiReceitaDespesa';
const urlPrincipal = 'http://localhost:3000/fixedExpense';

export const BuscarTodasDespesasFixas = () => {
    return ApiReceitaDespesa(urlPrincipal + '/search', 'GET')       
}

export const BuscarDespesaFixaPorNome = (nome) => {
    return ApiReceitaDespesa(urlPrincipal + `/search/${nome}`, 'GET');
}

export const CriarDespesaFixa = (nome, descricao, valor, data) => {
    return ApiReceitaDespesa(urlPrincipal + '/create', 'POST', { name: nome, description: descricao, value: valor, date: data });
}

export const AtualizarDespesaFixa = (nome, descricao, valor, data) => {
    return ApiReceitaDespesa(urlPrincipal + `/update/${nome}`, 'PUT', { description: descricao, value: valor, date: data });
}

export const DeletarDespesaFixa = (nome) => {
    return ApiReceitaDespesa(urlPrincipal + `/delete/${nome}`, 'DELETE');
}
    