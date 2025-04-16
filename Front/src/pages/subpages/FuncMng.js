import React, { useState, useEffect } from "react";
import FormFunc from "../../components/forms/FormFunc";
import GridFunc from "../../components/grids/GridFunc";
import styled from "styled-components";
import GlobalStyle from "../../styles/global";
import {toast, ToastContainer} from "react-toastify";


const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
;` 


const Title = styled.h2``;

const FuncMng = () => {

  const[funcs, setFunc] = useState([]);
  const[onEdit, setOnEdit] = useState(null);


  const getFunc = async () => {
    try {
      const response = await fetch("http://localhost:3000/consulta/funcionarios", {
      
      })
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar os produtos: ${response.statusText}`);
      }
    
      const data = await response.json();
      console.log("Funcionarios cadastrados: ", data);

      setFunc(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar funcionarios");
    }
    
  }

  useEffect(() => {
    getFunc();
  }, []);


  return (
    <div>
      <Container>
        <Title>FUNCIONÁRIOS</Title>
      </Container>
      <FormFunc onEdit={onEdit} setOnEdit={setOnEdit} getFunc = {getFunc} />
      <GridFunc funcs={funcs} setFunc={setFunc} setOnEdit={setOnEdit}/>
      <ToastContainer autoClose = {3000} position = "bottom-left"/>  
      <GlobalStyle/> 
    </div>
  );
};

export default FuncMng;