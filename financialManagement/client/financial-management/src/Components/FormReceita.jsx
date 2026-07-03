import { useState, useEffect } from "react";
import styles from "./FormReceita.module.css";

export const FormReceita = ({
  carregarDados,
  criarReceita,
  fecharModal,
  atualizarReceita,
  modo,
  item,
}) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  useEffect(() => {
    if (item) {
      setNome(item.name || "");
      setDescricao(item.description || "");
      setValor(item.value || "");
    }
  }, [item]);

  const enviarFormulario = async (e) => {
    e.preventDefault();
    switch (modo) {
      case "criar":
        if (criarReceita) {
          await criarReceita(nome, descricao, valor);
        }
        break;
      case "atualizar":
        if (atualizarReceita) {
          await atualizarReceita(item.id, nome, descricao, Number(valor));
        }
        break;

      default:
        return;
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
        readOnly={modo === "visualizar"}
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        readOnly={modo === "visualizar"}
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        readOnly={modo === "visualizar"}
      />
      {modo !== "visualizar" && (
        <button className="btn-primary" type="submit">
          Salvar Receita
        </button>
      )}
    </form>
  );
};
