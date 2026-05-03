
import { Card } from "../Components/Card";
import { Header } from "../Components/Header"
import styles from './Dashboard.module.css';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
const dataArray = [{nome: '01/01/2026', valor: 1000}, {nome: '01/02/2026', valor: 2000},{nome: '01/03/2026', 
    valor: 2000},{nome: '01/04/2026', valor: 2000},{nome: '01/05/2026', valor: 5000}]
const data = [
  { mes: "Jan", receitas: 3000, despesas: 1500, saldo: 1500 },
  { mes: "Fev", receitas: 2800, despesas: 1800, saldo: 1000 },
  { mes: "Mar", receitas: 3200, despesas: 2000, saldo: 1200 },
  { mes: "Abr", receitas: 2500, despesas: 2200, saldo: 300 },
  { mes: "Mai", receitas: 4000, despesas: 2600, saldo: 1400 },
  { mes: "Jun", receitas: 3500, despesas: 3000, saldo: 500 },
];
export const Dashboard = () => {
    return (
        <div className={styles.main}>
            <Header nome='Dashboard' ></Header>
            <section className={styles.sectionDashboard}>
                <div className={styles.cardContainer}>
                    <Card valor={5000} titulo="Receita Total" tipo='sucesso' ></Card>
                    <Card valor={5000} titulo="Despesa Total" tipo='danger' ></Card>
                    
                </div>
                <div style={{marginRight: 30}}>

                    <Card valor={5000} titulo="Lucro Total" tipo='' ></Card>
                </div>
            <div className={styles.chart}>
            
            
    
                 <ResponsiveContainer style={{marginLeft: 20}} width="80%" height={300}>
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

            

            
            <div className={styles.chart}>
                <ResponsiveContainer width="30%" height={300}>
                <LineChart data={dataArray}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                    name="Valor Acumulado"
                    type="monotone"
                    dataKey="valor"
                    stroke="var(--purple-main)"
                    strokeWidth={3}
                    />
                    
                
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
