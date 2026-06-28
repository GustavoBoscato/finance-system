const urlPrincipal = 'http://localhost:3000/variableExpense';


export const despesaVariavelAPI = (url, method, body) => {

    return fetch(url , {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: body ? JSON.stringify(body) : null
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export const BuscarTodasDespesasVariaveis = () => {
    return despesaVariavelAPI(urlPrincipal + '/search', 'GET')       
}

export const BuscarDespesaVariavelPorNome = (nome) => {
    return despesaVariavelAPI(urlPrincipal + `/search/${nome}`, 'GET');
}

export const CriarDespesaVariavel = (nome, descricao, valor) => {
    return despesaVariavelAPI(urlPrincipal + '/create', 'POST', { name: nome, description: descricao, value: valor });
}

export const AtualizarDespesaVariavel = (nome, descricao, valor, cor) => {
    return despesaVariavelAPI(urlPrincipal + `/update/${nome}`, 'PUT', { description: descricao, value: valor, color: cor });
}

export const DeletarDespesaVariavel = (nome) => {
    return despesaVariavelAPI(urlPrincipal + `/delete/${nome}`, 'DELETE');
}
    