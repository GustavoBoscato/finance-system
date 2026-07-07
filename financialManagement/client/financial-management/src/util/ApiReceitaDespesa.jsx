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
        console.log(response);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || error.error);
        }
        const data = await response.json();
        console.log('Resposta da API:', data);
        return data;

    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }

}