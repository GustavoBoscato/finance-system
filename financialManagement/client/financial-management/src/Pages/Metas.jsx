import { Header } from "../Components/Header";
import styles from './Metas.module.css';
import {useAuth} from "../function/useAuth";
export const Metas = () => {
    useAuth();
    return (
        <div className={styles.main}>
            <Header nome='Metas'></Header>        
        </div>
    )
}
