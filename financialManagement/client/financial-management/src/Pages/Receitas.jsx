import { Header } from "../Components/Header"
import styles from './Receitas.module.css'
import {useAuth} from "../function/useAuth";
export const Receitas = () => {
    useAuth();
    return (
            <div className={styles.main}>
                <Header nome='Receitas'></Header>        
            </div>
    )
}
