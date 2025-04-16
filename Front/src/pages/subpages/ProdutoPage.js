import React, { useState, useEffect } from "react";
import FormProduto from "../../components/forms/FormProduto";
import GridProduto from "../../components/grids/GridProduto";
import styled from "styled-components";
import GlobalStyle from "../../styles/global";
import {toast, ToastContainer} from "react-toastify";
import FiltroProdutos from "../../components/FiltrosProduto";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;


const Title = styled.h2``;

const ProdutoPage = () => {

  const[produtos, setProduto] = useState([]);
  const[onEdit, setOnEdit] = useState(null);
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);

  const filtrarProdutos = (filtros) => {
    const resultado = produtos.filter(p => {
      return (
        p.nome.toLowerCase().includes(filtros.nome.toLowerCase()) &&
        (filtros.categoria === '' || p.categoria.toLowerCase() === filtros.categoria.toLowerCase()) &&
        (filtros.precoMin === '' || p.preco >= parseFloat(filtros.precoMin)) &&
        (filtros.precoMax === '' || p.preco <= parseFloat(filtros.precoMax)) &&
        (filtros.estoqueMin === '' || p.qtd >= parseInt(filtros.estoqueMin))
      );
    });
    setProdutosFiltrados(resultado);
  };

  const getProduto = async () => {
    try {
      const response = await fetch("http://localhost:3000/consulta/produtos", {
      
      })
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar os produtos: ${response.statusText}`);
      }
    
      const data = await response.json();
      console.log("Produtos recebidos: ", data);

      setProduto(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));//Ordena alfabeticamente
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar produtos");//Exibe a mensagem de erro
    }
    
  }

  useEffect(() => {
    getProduto();
  }, []);


  return (
    <div>
      <Container>
        <Title>PRODUTOS</Title>
      </Container>
      <FormProduto onEdit={onEdit} setOnEdit={setOnEdit} getProduto = {getProduto} />
      <GridProduto produtos={produtosFiltrados} setProduto={setProduto} setOnEdit={setOnEdit}/>
      <FiltroProdutos onFiltrar={filtrarProdutos}/>
      <ToastContainer autoClose = {3000} position = "bottom-left"/>  
      <GlobalStyle/> 
    </div>
  );
};

export default ProdutoPage;
