import { useState } from "react";
import styles from "./Cadastro.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {CadastrarAPI} from "../util/CadastrarAPI";
export const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

  return (
    <div className={styles.divCadastroTudo}>
      <div className={styles.imagemLogin}>
        <img src="/cadastro1.svg" alt="Imagem Cadastro" />
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await CadastrarAPI(email, name, password);
          if (response) {
            navigate("/login");
          } else {
            console.log("Cadastro falhou");
          }

        }}
        className={styles.form}
      >
        <h1>Somos seus parceiros.</h1>
        <p>Faça seu cadastro e revolucione sua gestão financeira.</p>

        <input
          placeholder="Digite seu Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Digite seu Nome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Digite sua Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

        <p className={styles.link}>
          <Link to="/login">Já tem uma conta? Faça login</Link>
        </p>
      </form>
    </div>
  );
};
