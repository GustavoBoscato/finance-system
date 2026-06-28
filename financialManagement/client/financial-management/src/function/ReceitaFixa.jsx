const urlPrincipal = 'http://localhost:3000/fixedIncome';


export const receitaFixaAPI = (url, method, body) => {

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

export const BuscarTodasReceitasFixas = () => {
    return receitaFixaAPI(urlPrincipal + '/search', 'GET')       
}

export const BuscarReceitaFixaPorNome = (nome) => {
    return receitaFixaAPI(urlPrincipal + `/search/${nome}`, 'GET');
}

export const CriarReceitaFixa = (nome, descricao, valor) => {
    return receitaFixaAPI(urlPrincipal + '/create', 'POST', { name: nome, description: descricao, value: valor });
}

export const AtualizarReceitaFixa = (nome, descricao, valor, cor) => {
    return receitaFixaAPI(urlPrincipal + `/update/${nome}`, 'PUT', { description: descricao, value: valor, color: cor });
}

export const DeletarReceitaFixa = (nome) => {
    return receitaFixaAPI(urlPrincipal + `/delete/${nome}`, 'DELETE');
}
    