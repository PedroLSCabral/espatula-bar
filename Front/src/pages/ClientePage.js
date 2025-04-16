import React from "react";
import { Link } from "react-router-dom";

const ClientePage = () => {
  return (
    <div style={styles.container}>
        <h1>Bem-vindo Cliente!</h1>
        <p>Selecione uma opção no menu abaixo para continuar.</p>

      <div style={styles.cards}>
        <Link to="/cliente_mng" style={styles.card}>
          <h2>Cliente</h2>
          <p>Consultar os clientes.</p>
        </Link>
        

        <Link to="/sobre" style={styles.card}>
          <h2>Informações sobre nós.</h2>
        </Link>
      </div>

    </div>
    
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "2rem",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1rem",
    width: "200px",
    textDecoration: "none",
    color: "#333",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease-in-out",
  },
};

export default ClientePage;