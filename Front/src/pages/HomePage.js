import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Bem-vindo ao Sistema de Gestão do Espatula Bar</h1>
      <p>Selecione uma opção no menu abaixo para continuar.</p>

      <div style={styles.cards}>
        
        <Link to="/funcionarios" style={styles.card}>
          <h2>Funcionário</h2>
          <p>Acesse o painel de controle para gerenciar o sistema.</p>
        </Link>

        <Link to="/sobre" style={styles.card}>
          <h2>Sobre</h2>
          <p>Informações sobre nós.</p>
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

export default HomePage;