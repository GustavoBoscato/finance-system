import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
export const Siderbar = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.nav}>
                <Link to="/dashboard">Dashboards</Link>
                <Link to="/receitas">Receitas</Link>
                <Link to="/despesas">Despesas</Link>
                <Link to="/relatorios">Relatórios</Link>
                <Link to="/alocacaoRenda">Alocação de Renda</Link>
                <Link to="/metas">Metas</Link>
            </nav>
        </div>
    )
}
