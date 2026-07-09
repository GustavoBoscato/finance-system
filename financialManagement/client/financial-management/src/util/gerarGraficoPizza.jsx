import React from 'react'

export const gerarGraficoPizza = (fixas, variaveis) => {
    return [
        { name: "Receitas Fixas", value: fixas.reduce((acc, item) => acc + item.value, 0), fill: "var(--purple-main)" },
        { name: "Receitas Variáveis", value: variaveis.reduce((acc, item) => acc + item.value, 0), fill: "var(--success)" }
    ]
}
