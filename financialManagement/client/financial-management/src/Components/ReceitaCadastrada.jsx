import styles from "./ReceitaCadastrada.module.css";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Modal } from "./Modal";
import { FormReceita } from "./FormReceita";
import {AtualizarReceitaFixa} from "../function/ReceitaFixaAPI";
import { useState } from "react";

export const ReceitaCadastrada = ({
  nome,
  valor,
  item,
  onInfo,
  onEditar,
  onExcluir,
  carregarDados
}) => {
  const [modalAberta, setModalAberta] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{nome}</h3>
        <span>R$ {valor}</span>
      </div>
      <Modal
          aberto={modalAberta}
          fechar={() => setModalAberta(false)}
          titulo="Cadastrar Receita Fixa"
      >
      
          <FormReceita item={item} carregarDados={carregarDados} atualizarReceita={AtualizarReceitaFixa} fecharModal={() => setModalAberta(false)}/>
      
      </Modal>
      <div className={styles.buttons}>
        <FaEye
          className={styles.infoIcon}
          onClick={onInfo}
        />
        <FiEdit
          className={styles.editIcon}
          onClick={async ()=>{
            setModalAberta(true)
            
            await carregarDados();

          }}
        />
        <FaRegTrashAlt
          className={styles.deleteIcon}
          onClick={async () => {
            await onExcluir(item.id)
            await carregarDados();
            
          }}
        />
        {console.log("Item", item)}
      </div>
    </div>
  );
};