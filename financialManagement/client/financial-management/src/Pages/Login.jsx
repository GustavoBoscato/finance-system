
import styles from './Login.module.css';
export const Login = () => {
    return (
        <div className={styles.divLoginTudo}>
            <div className={styles.imagemLogin}>
                <img src="/login.svg" alt="Imagem Login" />
            </div>
           <form className={styles.form}>
                <h1>Controle sua vida financeira</h1>
                <p>Digite seu login para gerenciar sua renda.</p>
                
                <input placeholder='Digite seu Email' type="email"/>

                <input placeholder='Digite sua Senha' type="password"/>
                <button>Entrar</button>
                <p className={styles.link}>Cadastre-se</p>
           </form>
        </div>
    )
}
