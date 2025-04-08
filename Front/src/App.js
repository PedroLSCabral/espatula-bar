import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Form from "./components/form.js";
import Grid from "./components/grid.js";
import {toast, ToastContainer} from "react-toastify"; //Pop up pra feedback("Usuario cadastrado com sucesso!" por exemplo)
import "react-toastify/dist/ReactToastify.css";//Para estilizar o pop up
import axios from "axios";


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

function App() {

  const[produtos, setProduto] = useState([]);
  const[onEdit, setOnEdit] = useState(null);

  const getProduto = async () => {
    try {
      const response = await fetch("http://140.238.181.193:3000/produtos", {
      
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
    <div className="App">
      <Container>
        <Title>PRODUTOS</Title>
      </Container>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getProduto = {getProduto} />
      <Grid produtos={produtos} setProduto={setProduto} setOnEdit={setOnEdit}/>
      <ToastContainer autoClose = {3000} position = "bottom-left"/>  
      <GlobalStyle/> 
    </div>
  );
};

export default App;
