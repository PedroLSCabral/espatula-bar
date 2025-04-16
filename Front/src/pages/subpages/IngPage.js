import React, { useState, useEffect } from "react";
import FormIng from "../../components/forms/FormIng";
import GridIng from "../../components/grids/GridIng";
import styled from "styled-components";
import GlobalStyle from "../../styles/global";
import {toast, ToastContainer} from "react-toastify";

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

const IngPage = () => {

  const[ingreds, setIng] = useState([]);
  const[onEdit, setOnEdit] = useState(null);

  const getIng = async () => {
    try {
      const response = await fetch("http://140.238.181.193:3000/consulta/ingredientes", {
      
      })
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar os ingredientes: ${response.statusText}`);
      }
    
      const data = await response.json();
      console.log("Ingredientes recebidos: ", data);

      setIng(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar ingredientes");
    }
    
  }

  useEffect(() => {
    getIng();
  }, []);


  return (
    <div>
      <Container>
        <Title>INGREDIENTES</Title>
      </Container>
      <FormIng onEdit={onEdit} setOnEdit={setOnEdit} getIng = {getIng} />
      <GridIng ingreds={ingreds} setIng={setIng} setOnEdit={setOnEdit}/>
      <ToastContainer autoClose = {3000} position = "bottom-left"/>  
      <GlobalStyle/> 
    </div>
  );
};

export default IngPage;