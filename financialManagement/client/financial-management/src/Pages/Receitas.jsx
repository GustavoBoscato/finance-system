import { Header } from "../Components/Header";
import styles from "./Receitas.module.css";
import { useAuth } from "../customHooks/useAuth";
import { useEffect, useState } from "react";
import { ReceitaCadastrada } from "../Components/ReceitaCadastrada";
import { BuscarTodasReceitasFixas } from "../util/ReceitaFixaAPI";
import {
  AtualizarReceitaVariavel,
  BuscarTodasReceitasVariaveis,
} from "../util/ReceitaVariavelAPI";
import { Modal } from "../Components/Modal";
import { FormReceita } from "../Components/FormReceita";
import { CriarReceitaFixa } from "../util/ReceitaFixaAPI";
import { CriarReceitaVariavel } from "../util/ReceitaVariavelAPI";
import { DeletarReceitaFixa } from "../util/ReceitaFixaAPI";
import { DeletarReceitaVariavel } from "../util/ReceitaVariavelAPI";
import { AtualizarReceitaFixa } from "../util/ReceitaFixaAPI";
import { useReceitas } from "../customHooks/useReceitas";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell
} from "recharts";
import { gerarGraficoAcumulativo } from "../util/gerarGrafico";
import { gerarGraficoPizza } from "../util/gerarGraficoPizza";
export const Receitas = () => {
  useAuth();

  const [modalAbertaFixa, setModalAbertaFixa] = useState(false);
  const [modalAbertaVariavel, setModalAbertaVariavel] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulação de fetch inicial
  const {
    receitasFixas,
    receitasVariaveis,
    dadosGraficoAcumulativo,
    dadosGraficoPizza,
    totalVariavel,
    totalFixo
  } = useReceitas();
 

  useEffect(() => {
    const init = async () => {
      await carregarDados();
    };
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
          <p className={styles.valor}>
            R${" "}
            {(
              parseFloat(
                receitasFixas.reduce((acc, item) => acc + item.value, 0),
              ) +
              parseFloat(
                receitasVariaveis.reduce((acc, item) => acc + item.value, 0),
              )
            ).toFixed(2)}
          </p>
        </div>

        <div className="card">
          <h3>Receita Fixa</h3>
          <p className={styles.valor}>
            R${" "}
            {receitasFixas
              .reduce((acc, item) => acc + item.value, 0)
              .toFixed(2)}
          </p>
        </div>

        <div className="card">
          <h3>Receita Variável</h3>
          <p className={styles.valor}>
            R${" "}
            {receitasVariaveis
              .reduce((acc, item) => acc + item.value, 0)
              .toFixed(2)}
          </p>
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
              height={220}
            >
              <LineChart data={dadosGraficoAcumulativo}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
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
            <ResponsiveContainer width="70%" height={200}>
              <PieChart>
                <Pie
 data={dadosGraficoPizza}
 dataKey="value"
 nameKey="name"
 cx="50%"
 cy="50%"
 outerRadius={100}
 innerRadius={16}
>
 {
  dadosGraficoPizza.map((entry, index) => (
    <Cell 
      key={`cell-${index}`}
      fill={entry.fill}
    />
  ))
 }
</Pie>
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
          titulo="Cadastrar Receita Variável"
        >
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
          <FormReceita
            modo="criar"
            carregarDados={carregarDados}
            criarReceita={CriarReceitaFixa}
            fecharModal={() => setModalAbertaFixa(false)}
          />
        </Modal>
        <div className="card">
          <div className={styles.crudHeader}>
            <h3>Receitas Fixas</h3>
            <button
              className="btn-primary"
              onClick={() => setModalAbertaFixa(true)}
            >
              + Nova Receita
            </button>
          </div>

          {receitasFixas.length === 0 ? (
            <p className="text-muted">Nenhuma receita fixa cadastrada</p>
          ) : (
            receitasFixas.map((item, index) => (
              <div key={item.id} className={styles.item}>
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
            <button
              className="btn-primary"
              onClick={() => setModalAbertaVariavel(true)}
            >
              + Nova Receita
            </button>
          </div>

          {receitasVariaveis.length === 0 ? (
            <p className="text-muted">Nenhuma receita variável cadastrada</p>
          ) : (
            receitasVariaveis.map((item, index) => (
              <div key={item.id} className={styles.item}>
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
