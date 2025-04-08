import React, {useRef} from "react";
import styled from "styled-components";
import axios from "axios";
import {FaTrash, FaEdit} from "react-icons/fa";
import {toast} from "react-toastify";

//Define a estilização de Table
const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

//Define a estilização de Thead
export const Thead = styled.thead``;

//Define a estilização de Tr
export const Tr = styled.tr``;

//Define a estilização de Th
export const Th = styled.th`
    width: 30%;
    text-align: start;
    border-bottom: 5px solid #ccc;
    padding: 10px 5px;

`;

//Define a estilização de Tbody
export const Tbody = styled.tbody``

//Define a estilização de Td
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")}; 

    
`;



const Grid = ({produtos, setProduto, setOnEdit}) => {

    const handleDelete = async(id) => { //Responsável pela exclusão dos produtos. 
        await axios
            .delete(`http://140.238.181.193:3000/produtos/`, {
                data: {id: id}
            })
            .then(({data}) => {
                const newArray = produtos.filter((produto) => produto.id !== id);

                setProduto(newArray);//Cadastra a nova instância
                toast.success(data);//Envia a mensagem de sucesso.
            })
            .catch((err) => {
                console.error(err);
                toast.error("Erro ao excluir o produto");//Envia a mensagem de erro.
            });
            
        setOnEdit(null);
    };

    const handleEdit = (item) => {
        setOnEdit(item);
    };

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Tipo</Th>
                    <Th>Quantidade</Th>
                    <Th>Preço</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {produtos.map((item, i) => (
                    <Tr key = {item.id}>
                        <Td width = "30%">{item.nome}</Td>
                        <Td width = "30%">{item.tipo}</Td>
                        <Td width = "30%">{item.qtd}</Td>
                        <Td width = "30%">{item.preco}</Td>
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
    );
};

export default Grid;
