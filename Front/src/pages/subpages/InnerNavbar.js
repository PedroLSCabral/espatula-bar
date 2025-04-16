import { Link } from "react-router-dom";

const InnerNavbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Painel do Funcionário</h2>
      <ul style={styles.links}>
        <li><Link to="/clientes_mng">Clientes</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/compras">Compras</Link></li>
        <li><Link to="/ingredientes">Ingredientes</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { display: "flex", justifyContent: "space-between", padding: "1rem", background: "#444", color: "#fff" },
  links: { listStyle: "none", display: "flex", gap: "1rem" },
};

export default InnerNavbar;
