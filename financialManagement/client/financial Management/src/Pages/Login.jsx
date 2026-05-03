
import styles from './Login.module.css';
export const Login = () => {
    return (
        <div className={styles.divLoginTudo}>
           <form className={styles.form}>
                <h1>Sistema de Gerenciamento Financeiro</h1>
                <input placeholder='Digite seu Email' type="email"/>
                <input placeholder='Digite sua Senha' type="password"/>
                <button>Entrar</button>
                <p>Cadastre-se</p>
           </form>
        </div>
    )
}
