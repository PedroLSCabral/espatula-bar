import React from "react";
import { Link } from "react-router-dom";

const FuncionarioPage = () => {
  return (
    <div style={styles.container}>
      <h1>Bem-vindo Funcionário!</h1>
      <p>Selecione uma opção no menu abaixo para continuar.</p>

      <div style={styles.cards}>
        <Link to="/cliente_mng" style={styles.card}>
          <h2>Cliente</h2>
          <p>Acesse para ver informações para clientes e realizar cadastros.</p>
        </Link>

        <Link to="/compras" style={styles.card}>
          <h2>Compras</h2>
          <p>Acesse para efetuar uma compra.</p>
        </Link>

        <Link to="/ingredientes" style={styles.card}>
          <h2>Ingredientes</h2>
          <p>Acesse para gerenciar o estoque de ingredientes.</p>
        </Link>

        <Link to="/funcionario_mng" style={styles.card}>
          <h2>Funcionários</h2>
          <p>Acesse para ver informações dos funcionários e realizar cadastros.</p>
        </Link>


        <Link to="/produtos" style={styles.card}>
          <h2>Produtos</h2>
          <p>Acesse para gerenciar o estoque de produtos.</p>
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

export default FuncionarioPage;