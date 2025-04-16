import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClientePage from "./pages/ClientePage";
import CompraPage from "./pages/subpages/CompraPage";
import ProdutoPage from "./pages/subpages/ProdutoPage";
import FuncionarioPage from "./pages/FuncionarioPage";
import Layout from "./components/Layout";
import SobrePage from "./pages/SobrePage";
import IngPage from "./pages/subpages/IngPage";
import ClienteMng from "./pages/subpages/ClienteMng";
import FuncMng from "./pages/subpages/FuncMng";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/clientes" element={<ClientePage />} />
          <Route path="/compras" element={<CompraPage />} />
          <Route path="/produtos" element={<ProdutoPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/ingredientes" element={<IngPage />} />
          <Route path="/funcionarios" element={<FuncionarioPage />} />
          <Route path="/cliente_mng" element={<ClienteMng />} />
          <Route path="/funcionario_mng" element={<FuncMng />} />          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
