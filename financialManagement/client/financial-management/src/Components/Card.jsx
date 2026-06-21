import styles from "./Card.module.css";

export function Card({ titulo, valor, tipo }) {
  return (
    <div className={styles.card}>
      <p className={styles.titulo}>{titulo}</p>
      <h2
        className={styles.valor}
        style={{
          color:
            tipo === "sucesso"
              ? "var(--success)"
              : tipo === "danger"
              ? "var(--danger)"
              : "var(--text-primary)",
        }}
      >
        R$ {valor}
      </h2>
    </div>
  );
}