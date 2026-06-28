import { Header } from "../Components/Header"
import styles from './AlocacaoRenda.module.css';
import { useAuth } from '../customHooks/useAuth';
export const AlocacaoRenda = () => {
    useAuth();
    return (
        <div className={styles.main}>
            <Header nome='Alocação de Renda'></Header>            
        </div>
    )
}
