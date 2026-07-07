import { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { LoginAPI } from "../util/LoginAPI";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.divLoginTudo}>
      <div className={styles.imagemLogin}>
        <img src="/login.svg" alt="Imagem Login" />
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(email, password);
          const response = await LoginAPI(email, password);
            if (response.token) {
              navigate("/dashboard");
            } else {
              console.log("Login falhou");
            }
        }}
        className={styles.form}
      >
        <h1>Controle sua vida financeira</h1>
        <p>Digite seu login para gerenciar sua renda.</p>

        <input
          placeholder="Digite seu Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Digite sua Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <p className={styles.link}>
          <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
};
