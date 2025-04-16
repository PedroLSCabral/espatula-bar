import { useEffect, useState } from "react";
import FormCompra from "../../components/forms/FormCompra";
import GridCompra from "../../components/grids/GridCompra";
import axios from "axios";

const CompraPage = () => {
  const [compras, setCompras] = useState([]);
  const [produtos, setProdutos] = useState([]);

  
  const carregarDados = () => {
    axios.get("http://localhost:3000/compras")
      .then(res => setCompras(res.data))
      .catch(err => console.error("Erro ao carregar compras:", err));

    axios.get("http://localhost:3000/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.error("Erro ao carregar produtos:", err));
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const handleNovaCompra = (novaCompra) => {
    axios.post("http://localhost:3000/compras", novaCompra)
      .then(() => carregarDados()) 
      .catch(err => console.error("Erro ao cadastrar compra:", err));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Controle de Compras</h1>
      <FormCompra onSubmit={handleNovaCompra} produtos={produtos} />
      <GridCompra compras={compras} produtos={produtos} />
    </div>
  );
};

export default CompraPage;