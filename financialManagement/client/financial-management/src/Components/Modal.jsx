import styles from "./Modal.module.css";
import { FormReceita } from "./FormReceita";
export const Modal = ({ aberto, fechar, titulo, children }) => {
  if (!aberto) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <div className={styles.header}>
          <h2>{titulo}</h2>

          <button onClick={fechar}>
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {children}
        </div>

      </div>
    </div>
  );
};