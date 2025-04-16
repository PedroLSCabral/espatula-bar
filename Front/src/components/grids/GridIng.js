import React, {useRef} from "react";
import axios from "axios";
import {FaTrash, FaEdit} from "react-icons/fa";
import {toast} from "react-toastify";
import { Table, Thead, Tr, Th, Tbody, Td } from "../../styles/styledConsts";

const GridIng = ({ingreds, setIng, setOnEdit}) => {

    const handleDelete = async(id) => { 
        await axios
            .delete(`http://localhost:3000/registro/ingredientes/`, {
                data: {id: id}
            })
            .then(({data}) => {
                const newArray = ingreds.filter((ingred) => ingred.id !== id);

                setIng(newArray);
                toast.success(data);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Erro ao excluir o ingrediente");
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
                    <Th>Categoria</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {ingreds.map((item, i) => (
                    <Tr key = {item.id}>
                        <Td width = "30%">{item.nome}</Td>
                        <Td width = "30%">{item.qtd}</Td>
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

export default GridIng;