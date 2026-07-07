import {ApiReceitaDespesa} from './ApiReceitaDespesa';
const urlPrincipal = 'http://localhost:3000/variableIncome';


export const BuscarTodasReceitasVariaveis = () => {
    return ApiReceitaDespesa(urlPrincipal + '/search', 'GET')       
}

export const BuscarReceitaVariavelPorNome = (nome) => {
    return ApiReceitaDespesa(urlPrincipal + `/search/${nome}`, 'GET');
}

export const CriarReceitaVariavel = (nome, descricao, valor, data) => {
    return ApiReceitaDespesa(urlPrincipal + '/create', 'POST', { name: nome, description: descricao, value: valor, date: data });
}

export const AtualizarReceitaVariavel = (id ,nome, descricao, valor, data) => {
    return ApiReceitaDespesa(urlPrincipal + `/update/${id}`, 'PUT', { name: nome, description: descricao, value: valor, date: data });
}

export const DeletarReceitaVariavel = (nome) => {
    return ApiReceitaDespesa(urlPrincipal + `/delete/${nome}`, 'DELETE');
}
    