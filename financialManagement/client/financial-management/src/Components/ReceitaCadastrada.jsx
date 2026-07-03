import styles from "./ReceitaCadastrada.module.css";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Modal } from "./Modal";
import { FormReceita } from "./FormReceita";

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
  const [modalAbertaAtualizar, setModalAbertaAtualizar] = useState(false);
  const [modalAbertaLer, setModalAbertaLer] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{nome}</h3>
        <span>R$ {valor}</span>
      </div>
      <Modal
          aberto={modalAbertaAtualizar}
          fechar={() => setModalAbertaAtualizar(false)}
          titulo="Cadastrar Receita Fixa"
      >
      
          <FormReceita item={item} carregarDados={carregarDados} atualizarReceita={onEditar} modo="atualizar" fecharModal={() => setModalAbertaAtualizar(false)}/>
          
      </Modal>
      <Modal
          aberto={modalAbertaLer}
          fechar={() => setModalAbertaLer(false)}
          titulo="Cadastrar Receita Fixa"
      >
      
          <FormReceita item={item} carregarDados={carregarDados} modo="visualizar" fecharModal={() => setModalAbertaLer(false)}/>
          
      </Modal>
      <div className={styles.buttons}>
        <FaEye
          className={styles.infoIcon}
          onClick={
            async () => {
              setModalAbertaLer(true)
              await carregarDados();
            }
          }
        />
        <FiEdit
          className={styles.editIcon}
          onClick={async ()=>{
            setModalAbertaAtualizar(true)
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