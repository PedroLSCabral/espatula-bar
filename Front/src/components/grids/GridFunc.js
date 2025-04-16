import React, {useRef} from "react";
import axios from "axios";
import {FaTrash, FaEdit} from "react-icons/fa";
import {toast} from "react-toastify";
import { Table, Thead, Tr, Th, Tbody, Td } from "../../styles/styledConsts";

const GridFunc = ({funcs, setFunc, setOnEdit}) => {

    const handleDelete = async(id) => { 
        await axios
            .delete(`http://localhost:3000/registro/funcionarios/`, {
                data: {id: id}
            })
            .then(({data}) => {
                const newArray = funcs.filter((func) => func.id !== id);

                setFunc(newArray);
                toast.success(data);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Erro ao excluir o funcionario");
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
                    <Th>Idade</Th>
                    <Th>Email</Th>
                    <Th>Senha</Th>
                    <Th>CPF</Th>
                    <Th>Cidade</Th>
                    <Th>Torcida</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {funcs.map((item, i) => (
                    <Tr key = {item.id}>
                        <Td width = "30%">{item.nome}</Td>
                        <Td width = "30%">{item.idade}</Td>
                        <Td width = "30%">{item.email}</Td>
                        <Td width = "30%">{item.senha}</Td>
                        <Td width = "30%">{item.cpf}</Td>
                        <Td width = "30%">{item.cidade}</Td>
                        <Td width = "30%">{item.torcida}</Td>
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

export default GridFunc;