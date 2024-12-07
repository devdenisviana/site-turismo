import React from "react";
import styles from "./styles.module.css"; // Importando o arquivo CSS

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Todos os direitos reservados.</p>
    </footer>
  );
}