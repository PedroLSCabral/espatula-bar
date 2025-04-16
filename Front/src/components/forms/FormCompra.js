import { useEffect, useState } from "react";
import axios from "axios";
import {Label, Input, Select, Button, FormContainer} from "../../styles/styledConsts";

const FormCompra = () => {
  const [form, setForm] = useState({
    cpf_cliente: "",
    id_produto: "",
    forma_pag: "",
    qtd: 1,
    id_funcionario: "",
    total: 0,
  });

  const [produtos, setProdutos] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/consulta/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

 
  useEffect(() => {
    const produtoSelecionado = produtos.find(p => p.id === parseInt(form.id_produto));
    if (produtoSelecionado && form.qtd) {
      const novoTotal = produtoSelecionado.preco * form.qtd;
      setForm(prev => ({ ...prev, total: novoTotal }));
    }
  }, [form.id_produto, form.qtd, produtos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === "qtd" ? parseInt(value) : value
    }));
  };

  return (
    <FormContainer className="space-y-4 p-4 border rounded w-full max-w-md">
      <div>
        <Label>Cliente:</Label>
        <Input
          name="cpf_cliente"
          value={form.cpf_cliente}
          onChange={handleChange}
          
        />
      </div>

      <div>
        <Label>Produto:</Label>
        <Select
          name="id_produto"
          value={form.id_produto}
          onChange={handleChange}
          
        >
          <option value="">Selecione um produto</option>
          {produtos.map((produto) => (
            <option key={produto.id} value={produto.id}>
              {produto.nome}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label>Forma de Pagamento:</Label>
        <Select name="tipo" value={form.forma_pag} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="cartao">Cartão</option>
          <option value="pix">PIX</option>
          <option value="barries">Barries</option>
          
        </Select>
      </div>
      
      <div>
        <Label>Quantidade:</Label>
        <Input
          name="qtd"
          type="number"
          min="1"
          value={form.qtd}
          onChange={handleChange}
          
        />
      </div>

      <div>
        <Label>Total:</Label>
        <Input
          name="total"
          value={form.total}
          readOnly
          
        />
      </div>

      <Button type="submit">Finalizar Compra</Button>
    </FormContainer>
  );
};

export default FormCompra;