import { useEffect, useState } from "react";
import axios from "axios";
import {Table, Thead, Td, Tbody, Tr, Th} from "../../styles/styledConsts";

const GridCompra = () => {
  const [compras, setCompras] = useState([]);
  const [produtos, setProdutos] = useState([]);

  
  useEffect(() => {
    axios.get("http://localhost:3000/compras")
      .then(res => setCompras(res.data))
      .catch(err => console.error("Erro ao buscar compras:", err));

    axios.get("http://localhost:3000/consulta/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  
  const getNomeProduto = (id) => {
    const produto = produtos.find(p => p.id === id);
    return produto ? produto.nome : "Desconhecido";
  };

  return (
    <div className="p-4">
      <Table>
        <Thead>
          <Tr>
            <Th>CPF Cliente</Th>
            <Th>Produto</Th>
            <Th>Quantidade</Th>
            <Th>Total</Th>
            <Th>Funcionário</Th>
          </Tr>
        </Thead>
        <Tbody>
          {compras.map((compra) => (
            <Tr key={compra.id}>
              <Td>{compra.cpf_cliente}</Td>
              <Td>{getNomeProduto(compra.id_produto)}</Td>
              <Td>{compra.qtd}</Td>
              <Td>R$ {compra.total.toFixed(2)}</Td>
              <Td>{compra.id_funcionario || "N/A"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default GridCompra;