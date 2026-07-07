import {ApiReceitaDespesa} from './ApiReceitaDespesa';

const urlPrincipal = 'http://localhost:3000/fixedIncome';



export const BuscarTodasReceitasFixas = () => {
    return ApiReceitaDespesa(urlPrincipal + '/search', 'GET')       
}

export const BuscarReceitaFixaPorNome = (nome) => {
    return ApiReceitaDespesa(urlPrincipal + `/search/${nome}`, 'GET');
}

export const CriarReceitaFixa = (nome, descricao, valor, data) => {
    return ApiReceitaDespesa(urlPrincipal + '/create', 'POST', { name: nome, description: descricao, value: valor, date: data });
}

export const AtualizarReceitaFixa = (id,nome, descricao, valor, cor, data) => {
    return ApiReceitaDespesa(urlPrincipal + `/update/${id}`, 'PUT', { name: nome, description: descricao, value: valor, color: cor, date: data });
}

export const DeletarReceitaFixa = (nome) => {
    return ApiReceitaDespesa(urlPrincipal + `/delete/${nome}`, 'DELETE');
}
    