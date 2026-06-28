const urlPrincipal = 'http://localhost:3000/variableIncome';


export const receitaVariavelAPI = (url, method, body) => {

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

export const BuscarTodasReceitasVariaveis = () => {
    return receitaVariavelAPI(urlPrincipal + '/search', 'GET')       
}

export const BuscarReceitaVariavelPorNome = (nome) => {
    return receitaVariavelAPI(urlPrincipal + `/search/${nome}`, 'GET');
}

export const CriarReceitaVariavel = (nome, descricao, valor) => {
    return receitaVariavelAPI(urlPrincipal + '/create', 'POST', { name: nome, description: descricao, value: valor });
}

export const AtualizarReceitaVariavel = (nome, descricao, valor, cor) => {
    return receitaVariavelAPI(urlPrincipal + `/update/${nome}`, 'PUT', { description: descricao, value: valor, color: cor });
}

export const DeletarReceitaVariavel = (nome) => {
    return receitaVariavelAPI(urlPrincipal + `/delete/${nome}`, 'DELETE');
}
    