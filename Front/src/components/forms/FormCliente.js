import React, {useRef, useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { FormContainer, InputArea, Button, Label, Input } from "../../styles/styledConsts";

const FormCliente = ({onEdit, setOnEdit, getCliente}) => {
    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const cliente = ref.current;

            cliente.nome.value = onEdit.nome;
            cliente.idade.value = onEdit.idade;
            cliente.email.value = onEdit.cidade;
            cliente.cpf.value = onEdit.time;
            cliente.cidade.value = onEdit.email;
            cliente.torcida.value = onEdit.cpf;
        }
    }, [onEdit]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const cliente = ref.current;

        if (
            !cliente.nome.value ||
            !cliente.idade.value ||
            !cliente.email.value ||
            !cliente.cpf.value ||
            !cliente.cidade.value ||
            !cliente.torcida.value
        ) {
            return toast.warn("Preencha todos os campos!")
        }
        if(onEdit) {
            await axios
                .put(`http://localhost:3000/registro/clientes/`, {
                    id: onEdit.id,
                    nome: cliente.nome.value,
                    idade : cliente.idade.value,
                    email : cliente.email.value,
                    cpf : cliente.cpf.value,
                    cidade : cliente.cidade.value,
                    torcida : cliente.torcida.value
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));

        } else {
            await axios
                .post("http://localhost:3000/registro/clientes", {
                    nome: cliente.nome.value,
                    idade : cliente.idade.value,
                    email : cliente.email.value,
                    cpf : cliente.cpf.value,
                    cidade : cliente.cidade.value,
                    torcida : cliente.torcida.value
                })
                .then(({data}) => toast.success(data))
                .catch((err) => {
                    console.error(err);
                    toast.error("Erro ao salvar o cliente");
                });
                
        }
    setOnEdit(null);
    getCliente();
    };
    


    return (
        <FormContainer ref = {ref} onSubmit={handleSubmit}>
            <InputArea>
                <Input name = "id" type = "hidden"/>
            </InputArea>
            <InputArea>
                <Label>Nome</Label>
                <Input name = "nome"/>
            </InputArea>
            <InputArea>
                <Label>Idade</Label>
                <Input name = "idade" type = "number"/>
            </InputArea>
            <InputArea>
                <Label>Email</Label>
                <Input name = "email" type = "email"/>
            </InputArea>
            <InputArea>
                <Label>CPF</Label>
                <Input name = "cpf"/>
            </InputArea>
            <InputArea>
                <Label>Cidade</Label>
                <Input name = "cidade"/>
            </InputArea>
            <InputArea>
                <Label>Torcida</Label>
                <Input name = "torcida"/>
            </InputArea>

            <Button type = "submit">SALVAR</Button>
        </FormContainer>

    );
};

export default FormCliente;