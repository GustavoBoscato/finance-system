import { Card } from "../Components/Card";
import { Header } from "../Components/Header";
import styles from "./Dashboard.module.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  BarChart,
  Pie,
  PieChart,
  Sector,
} from "recharts";

const data = [
  { mes: "Jan", receitas: 3000, despesas: 1500, saldo: 1500 },
  { mes: "Fev", receitas: 2800, despesas: 1800, saldo: 1000 },
  { mes: "Mar", receitas: 3200, despesas: 2000, saldo: 1200 },
  { mes: "Abr", receitas: 2500, despesas: 2200, saldo: 300 },
  { mes: "Mai", receitas: 4000, despesas: 2600, saldo: 1400 },
  { mes: "Jun", receitas: 3500, despesas: 3000, saldo: 500 },
];
const dataPie = [
  { name: "Necessidades", value: 50, fill: "#8B5CF6" },
  { name: "Lazer", value: 30, fill: "#22C55E" },
  { name: "Investimentos", value: 20, fill: "#EF4444" },
];
const colors = [
  "var(--purple-main)",
  "var(--purple-neon)",
  "var(--success)",
  "var(--danger)",
  "#F59E0B",
];
const customColorsPie = () => {
  return colors.map((index) => {
    <Sector fill={colors[index % 2]}></Sector>;
  });
};
export const Dashboard = () => {
  return (
    <div className={styles.main}>
      <Header nome="Dashboard"></Header>
      <section className={styles.sectionDashboard}>
        <div className={styles.cardContainer}>
          <Card valor={5000} titulo="Receita Total" tipo="sucesso"></Card>
          <Card valor={5000} titulo="Despesa Total" tipo="danger"></Card>
          <Card
            className={styles.gridRow}
            valor={5000}
            titulo="Lucro Total"
            tipo=""
          ></Card>
        </div>

        <div className={styles.chart}>
          <ResponsiveContainer
            style={{ marginLeft: 20 }}
            width="80%"
            height={300}
          >
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                name="Despesas"
                type="monotone"
                dataKey="despesas"
                stroke="var(--danger)"
                strokeWidth={3}
              />
              <Line
                name="Receitas"
                type="monotone"
                dataKey="receitas"
                stroke="var(--success)"
                strokeWidth={3}
              />
              <Line
                name="Lucro"
                type="monotone"
                dataKey="saldo"
                stroke="var(--purple-main)"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <div className={styles.divInferior}>
        <div className={styles.divGraficosInferiores}>
          <div className={styles.chart2}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="mes" />
                <YAxis />

                <Tooltip />
                <Legend />

                <Bar dataKey="receitas" fill="var(--success)" />
                <Bar dataKey="despesas" fill="var(--danger)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <Card valor={5000} titulo="Receita Total" tipo="success"></Card>
        </div>
        <div className={styles.divGraficosInferiores}>
          <div className={styles.chart2}>

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
          <Card valor={5000} titulo="Receita Alocada" tipo="success"></Card>
        </div>
      </div>
    </div>
  );
};
