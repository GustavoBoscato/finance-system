import { Header } from "../Components/Header";
import styles from "./Receitas.module.css";
import { useAuth } from "../customHooks/useAuth";
import { useEffect, useState } from "react";
import { ReceitaCadastrada } from "../Components/ReceitaCadastrada";
import { BuscarTodasReceitasFixas} from "../function/ReceitaFixaAPI";
import { AtualizarReceitaVariavel, BuscarTodasReceitasVariaveis } from "../function/ReceitaVariavelAPI";
import { Modal } from "../Components/Modal";
import { FormReceita } from "../Components/FormReceita";
import { CriarReceitaFixa } from "../function/ReceitaFixaAPI";
import { CriarReceitaVariavel } from "../function/ReceitaVariavelAPI";
import { DeletarReceitaFixa } from "../function/ReceitaFixaAPI";
import { DeletarReceitaVariavel } from "../function/ReceitaVariavelAPI";
import { AtualizarReceitaFixa } from "../function/ReceitaFixaAPI";
import { Pie, PieChart, Cell} from "recharts";
import { ResponsiveContainer } from "recharts";
import { Tooltip } from "recharts";
import { Legend } from "recharts";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import {gerarGrafico} from "../function/gerarGrafico"
export const Receitas = () => {
  useAuth();

  const [receitasFixas, setReceitasFixas] = useState([]);
  const [receitasVariaveis, setReceitasVariaveis] = useState([]);

  const [modalAbertaFixa, setModalAbertaFixa] = useState(false);
  const [modalAbertaVariavel, setModalAbertaVariavel] = useState(false);
  const [dadosGraficoAcumulativo, setDadosGraficoAcumulativo] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataPie = [
  { name: "Necessidades", value: 50, fill: "#8B5CF6" },
  { name: "Lazer", value: 30, fill: "#22C55E" },
  { name: "Investimentos", value: 20, fill: "#EF4444" },
];
const data = [
  { mes: "Jan", receitas: 3000, despesas: 1500, saldo: 1500 },
  { mes: "Fev", receitas: 2800, despesas: 1800, saldo: 1000 },
  { mes: "Mar", receitas: 3200, despesas: 2000, saldo: 1200 },
  { mes: "Abr", receitas: 2500, despesas: 2200, saldo: 300 },
  { mes: "Mai", receitas: 4000, despesas: 2600, saldo: 1400 },
  { mes: "Jun", receitas: 3500, despesas: 3000, saldo: 500 },
];

  // Simulação de fetch inicial

  const carregarDados = async () => {
      try {
        const fixas = await BuscarTodasReceitasFixas();
        const variaveis = await BuscarTodasReceitasVariaveis();
        
        setReceitasFixas(fixas);
        setReceitasVariaveis(variaveis);
        setDadosGraficoAcumulativo(gerarGrafico(fixas, variaveis));
        const totalVariavel = variaveis.reduce((acc, item) => acc + item.value, 0);
        const totalFixo = fixas.reduce((acc, item) => acc + item.value, 0);
        
        console.log(gerarGrafico(fixas, variaveis), "Gerar gráfico");
        console.log("Receitas fixas carregadas:", totalFixo);
        console.log("Receitas variáveis carregadas:", totalVariavel);
      } catch (error) {
        console.error("Erro ao carregar receitas:", error);
      } finally {
        setLoading(false);
      }
    };

  useEffect( () => {
    const init = async () => {
      await carregarDados();
    }
    init();
  }, []);

  if (loading) {
    return (
      <div className={styles.main}>
        <Header nome="Receitas" />
        <div className={styles.loading}>Carregando dados...</div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <Header nome="Receitas" />

      {/* RESUMO */}
      <div className={styles.resumo}>
        <div className="card">
          <h3>Receita Total</h3>
          <p className={styles.valor}>R$ {parseFloat(receitasFixas.reduce((acc, item) => acc + item.value, 0).toFixed(2)) + parseFloat(receitasVariaveis.reduce((acc, item) => acc + item.value, 0).toFixed(2))}</p>
        </div>

        <div className="card">
          <h3>Receita Fixa</h3>
          <p className={styles.valor}>R$ {receitasFixas.reduce((acc, item) => acc + item.value, 0).toFixed(2)}</p>
        </div>

        <div className="card">
          <h3>Receita Variável</h3>
          <p className={styles.valor}>R$ {receitasVariaveis.reduce((acc, item) => acc + item.value, 0).toFixed(2)}</p>
        </div>
      </div>

      {/* GRÁFICOS */}
      <div className={styles.graficos}>
        <div className="card">
          <h3>Receita ao longo do tempo</h3>
          <div className={styles.placeholder}>
            {/* futuro gráfico de linha */}
            <ResponsiveContainer
                        style={{ marginLeft: 20 }}
                        width="80%"
                        height={300}
                      >
                        <LineChart data={dadosGraficoAcumulativo}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="mes" />
                          <YAxis/>
                          <Tooltip/>
                          <Legend/>
                          <Line
                            name="Receitas"
                            type="monotone"
                            dataKey="receitas"
                            stroke="var(--success)"
                            strokeWidth={3}
                          />
                        </LineChart>
                      </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3>Fixa vs Variável</h3>
          <div className={styles.placeholder}>
            {/* futuro gráfico de pizza */}
            <ResponsiveContainer width="100%" height={350}>
                        <PieChart
                  >
                          <Pie
                            data={dataPie}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={140}
                            innerRadius={20}
                          ></Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* CRUD */}
      <div className={styles.crud}>
        <Modal
    aberto={modalAbertaVariavel}
    fechar={() => setModalAbertaVariavel(false)}
    titulo="Cadastrar Receita Variável">

    <FormReceita
       carregarDados={carregarDados}
       criarReceita={CriarReceitaVariavel}
       fecharModal={() => setModalAbertaVariavel(false)}
       modo="criar"
    />

</Modal>
<Modal
    aberto={modalAbertaFixa}
    fechar={() => setModalAbertaFixa(false)}
    titulo="Cadastrar Receita Fixa"
>

    <FormReceita modo="criar" carregarDados={carregarDados} criarReceita={CriarReceitaFixa} fecharModal={() => setModalAbertaFixa(false)}/>

</Modal>
        <div className="card">
          <div className={styles.crudHeader}>
            <h3>Receitas Fixas</h3>
            <button className="btn-primary" onClick={() => setModalAbertaFixa(true)}>
              + Nova Receita
            </button>
          </div>

          {receitasFixas.length === 0 ? (
            <p className="text-muted">Nenhuma receita fixa cadastrada</p>
          ) : (
            receitasFixas.map((item, index) => (
              <div key={index} className={styles.item}>
                <ReceitaCadastrada
                  nome={item.name}
                  valor={item.value}
                  item={item}
                  onInfo={() => console.log("Info", item)}
                  onEditar={AtualizarReceitaFixa}
                  carregarDados={carregarDados}
                  onExcluir={DeletarReceitaFixa}
                />
              </div>
            ))
          )}
        </div>

        <div className="card">
          <div className={styles.crudHeader}>
            <h3>Receitas Variáveis</h3>
            <button className="btn-primary" onClick={() => setModalAbertaVariavel(true)}>
              + Nova Receita
            </button>
          </div>
          
          {receitasVariaveis.length === 0 ? (
            <p className="text-muted">Nenhuma receita variável cadastrada</p>
          ) : (
            receitasVariaveis.map((item, index) => (
          
    
              <div key={index} className={styles.item}>
                <ReceitaCadastrada
                  nome={item.name}
                  valor={item.value}
                  item={item}
                  onInfo={() => console.log("Info", item)}
                  onEditar={AtualizarReceitaVariavel}
                  carregarDados={carregarDados}
                  onExcluir={DeletarReceitaVariavel}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};