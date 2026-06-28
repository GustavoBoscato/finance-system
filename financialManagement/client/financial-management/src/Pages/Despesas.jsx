import { Header } from "../Components/Header"
import styles from './Despesas.module.css'
import { useAuth } from '../customHooks/useAuth';
export const Despesas = () => {
    useAuth();
    return (
        <div className={styles.main}>
            <Header nome='Despesas'></Header>
                    
        </div>
    )
}
