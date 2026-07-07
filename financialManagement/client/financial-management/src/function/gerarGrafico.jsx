 export const gerarGrafico = (fixas, variaveis) => {

    const valorMesTotal = new Array(12).fill(0);
    
    let acumuladoTotal = 0;
    
    fixas.forEach((item) => {
        const mes = new Date(item.date).getMonth();
        valorMesTotal[mes] += item.value;
    });

    variaveis.forEach((item) => {
        const mes = new Date(item.date).getMonth();
        valorMesTotal[mes] += item.value;
    });


    const dataTotal = valorMesTotal.map((valor, index) => (
        
        acumuladoTotal += valor,
        {
        mes: new Date(2024, index).toLocaleString("default", { month: "short" }),
        receitas: acumuladoTotal,

    }))
    return dataTotal

    
}