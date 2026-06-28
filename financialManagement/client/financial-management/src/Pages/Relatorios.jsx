import { Header } from "../Components/Header"
import styles from './Relatorios.module.css'
import { useAuth } from '../customHooks/useAuth';
export const Relatorios = () => {
    useAuth();
    return (
            <div className={styles.main}>
                <Header nome='Relatórios'></Header>        
            </div>
    )
}
