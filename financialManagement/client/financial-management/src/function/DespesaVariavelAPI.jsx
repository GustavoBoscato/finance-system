import {ApiReceitaDespesa} from './ApiReceitaDespesa';
const urlPrincipal = 'http://localhost:3000/variableExpense';

export const BuscarTodasDespesasVariaveis = () => {
    return ApiReceitaDespesa(urlPrincipal + '/search', 'GET')       
}

export const BuscarDespesaVariavelPorNome = (nome) => {
    return ApiReceitaDespesa(urlPrincipal + `/search/${nome}`, 'GET');
}

export const CriarDespesaVariavel = (nome, descricao, valor, data) => {
    return ApiReceitaDespesa(urlPrincipal + '/create', 'POST', { name: nome, description: descricao, value: valor, date: data });
}

export const AtualizarDespesaVariavel = (nome, descricao, valor, data) => {
    return ApiReceitaDespesa(urlPrincipal + `/update/${nome}`, 'PUT', { description: descricao, value: valor, date: data });
}

export const DeletarDespesaVariavel = (nome) => {
    return ApiReceitaDespesa(urlPrincipal + `/delete/${nome}`, 'DELETE');
}
    