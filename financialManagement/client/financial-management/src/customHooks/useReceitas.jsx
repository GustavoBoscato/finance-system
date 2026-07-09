import { useState, useEffect } from "react";
import { BuscarTodasReceitasFixas } from "../util/ReceitaFixaAPI";
import { BuscarTodasReceitasVariaveis } from "../util/ReceitaVariavelAPI";
import { gerarGraficoAcumulativo } from "../util/gerarGrafico";
import { gerarGraficoPizza } from "../util/gerarGraficoPizza";

export const useReceitas = async () => {

  const [receitasFixas, setReceitasFixas] = useState([]);
  const [receitasVariaveis, setReceitasVariaveis] = useState([]);

  const [dadosGraficoAcumulativo, setDadosGraficoAcumulativo] = useState([]);
  const [dadosGraficoPizza, setDadosGraficoPizza] = useState([]);

  const [loading, setLoading] = useState(true);
  
  try {
    const fixas = await BuscarTodasReceitasFixas();
    const variaveis = await BuscarTodasReceitasVariaveis();
    setReceitasFixas(fixas);
    setReceitasVariaveis(variaveis);
    setDadosGraficoAcumulativo(gerarGraficoAcumulativo(fixas, variaveis));
    setDadosGraficoPizza(gerarGraficoPizza(fixas, variaveis));
    const totalVariavel = variaveis.reduce((acc, item) => acc + item.value, 0);
    const totalFixo = fixas.reduce((acc, item) => acc + item.value, 0);
    return {receitasFixas, receitasVariaveis, dadosGraficoAcumulativo, dadosGraficoPizza, loading, totalVariavel, totalFixo};
  } catch (error) {
    console.error("Erro ao carregar receitas:", error);
  } finally {
    setLoading(false);
  }
};
