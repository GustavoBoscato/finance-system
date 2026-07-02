import { useState } from "react";
import styles from "./FormReceita.module.css";

export const FormReceita = ({
  carregarDados,
  criarReceita,
  fecharModal,
  atualizarReceita,
  item
}) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const enviarFormulario = async (e) => {
    e.preventDefault();
    if (criarReceita) {
      await criarReceita(nome, descricao, valor);
    } else if (atualizarReceita) {
      await atualizarReceita(item.id, nome, descricao, Number(valor));
    }
    setNome("");
    setDescricao("");
    setValor("");
    await carregarDados();
    fecharModal();
  };

  return (
    <form onSubmit={(e) => enviarFormulario(e)} className={styles.form}>
      <input
        placeholder="Nome da Receita"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button className="btn-primary" type="submit">
        Salvar Receita
      </button>
    </form>
  );
};
