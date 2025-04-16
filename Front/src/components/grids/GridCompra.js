import { useEffect, useState } from "react";
import axios from "axios";
import {FaTrash, FaEdit} from "react-icons/fa";
import {Table, Thead, Td, Tbody, Tr, Th} from "../../styles/styledConsts";

const GridCompra = () => {
  const [compras, setCompras] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const handleDelete = async(id) => {
    await axios
        .delete(`http://localhost:3000/compras`, {
            data: {id: id}
        })
        .then(({data}) => {
            const newArray = compras.filter((compra) => compra.id !== id);

            setCompras(newArray);
            toast.success(data);
        })
        .catch((err) => {
            console.error(err);
            toast.error("Erro ao excluir o produto");
        });
        
    setOnEdit(null);
};


const handleEdit = (item) => {
    setOnEdit(item);
};

  useEffect(() => {
    axios.get("http://localhost:3000/consulta/vendas")
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
            <Th>Forma de Pagamento</Th>
            <Th>Quantidade</Th>
            <Th>Total</Th>
            <Th>Funcionário</Th>
          </Tr>
        </Thead>
        <Tbody>
          {compras.map((item) => (
            <Tr key={item.id}>
              <Td>{item.cpf_cliente}</Td>
              <Td>{getNomeProduto(item.id_produto)}</Td>
              <Td>{item.forma_pag}</Td>
              <Td>{item.qtd}</Td>
              <Td>R$ {item.total.toFixed(2)}</Td>
              <Td>{item.id_funcionario || "N/A"}</Td>
              <Td alignCenter width = "5%">
                <FaEdit onClick={() => handleEdit(item)} style={{ color: "#000", cursor: "pointer" }}/>
              </Td>
              <Td alignCenter width = "5%">
                <FaTrash onClick={() => handleDelete(item.id)} style={{ color: "#000", cursor: "pointer" }}/>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default GridCompra;