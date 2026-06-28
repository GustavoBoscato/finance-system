export const ApiReceitaDespesa = async (url, method, body) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: body ? JSON.stringify(body) : null
        });
        if (!response.ok) {
            
            throw new Error('Erro na requisição');
        }
        return response.json();

    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }

}