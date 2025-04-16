import React, { useState, useEffect } from "react";
import FormCliente from "../../components/forms/FormCliente";
import GridCliente from "../../components/grids/GridCliente";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import {toast, ToastContainer} from "react-toastify";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;


const Title = styled.h2``;

const ClienteMng = () => {

  const[clientes, setCliente] = useState([]);
  const[onEdit, setOnEdit] = useState(null);

  const getCliente = async () => {
    try {
      const response = await fetch("http://localhost:3000/consulta/clientes", {
      
      })
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar os clientes: ${response.statusText}`);
      }
    
      const data = await response.json();
      console.log("Clientes recebidos: ", data);

      setCliente(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar clientes");
    }
    
  }

  useEffect(() => {
    getCliente();
  }, []);


  return (
    <div>
      <Container>
        <Title>CLIENTES</Title>
      </Container>
      <FormCliente onEdit={onEdit} setOnEdit={setOnEdit} getCliente = {getCliente} />
      <GridCliente clientes={clientes} setCliente={setCliente} setOnEdit={setOnEdit}/>
      <ToastContainer autoClose = {3000} position = "bottom-left"/>  
      <GlobalStyle/> 
    </div>
  );
};

export default ClienteMng;