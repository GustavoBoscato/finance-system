const urlPrincipal = 'http://localhost:3000/fixedIncome';


const receitaFixaAPI = (url, method, body) => {

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

const BuscarTodasReceitasFixas = () => {
    return receitaFixaAPI(urlPrincipal + '/search', 'GET')       
}

const BuscarReceitaFixaPorNome = (nome) => {
    return receitaFixaAPI(urlPrincipal + `/search/${nome}`, 'GET');
}

const CriarReceitaFixa = (nome, descricao, valor) => {
    return receitaFixaAPI(urlPrincipal + '/create', 'POST', { name: nome, description: descricao, value: valor });
}

const AtualizarReceitaFixa = (nome, descricao, valor, cor) => {
    return receitaFixaAPI(urlPrincipal + `/update/${nome}`, 'PUT', { description: descricao, value: valor, color: cor });
}

const DeletarReceitaFixa = (nome) => {
    return receitaFixaAPI(urlPrincipal + `/delete/${nome}`, 'DELETE');
}
    