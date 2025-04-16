import React, {useRef} from "react";
import axios from "axios";
import {FaTrash, FaEdit} from "react-icons/fa";
import {toast} from "react-toastify";
import { Table, Thead, Tr, Th, Tbody, Td } from "../../styles/styledConsts";

const GridProduto = ({produtos, setProduto, setOnEdit}) => {

    const handleDelete = async(id) => {
        await axios
            .delete(`http://localhost:3000/registro/produtos/`, {
                data: {id: id}
            })
            .then(({data}) => {
                const newArray = produtos.filter((produto) => produto.id !== id);

                setProduto(newArray);
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

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Quantidade</Th>
                    <Th>Preço</Th>
                    <Th>Categoria</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {produtos.map((item, i) => (
                    <Tr key = {item.id}>
                        <Td width = "30%">{item.nome}</Td>
                        <Td width = "30%">{item.qtd}</Td>
                        <Td width = "30%">{item.preco}</Td>
                        <Td width = "30%">{item.categoria}</Td>
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

export default GridProduto;
