import React, {useRef, useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { FormContainer, InputArea, Button, Label, Input } from "../../styles/styledConsts";

const FormFunc = ({onEdit, setOnEdit, getFunc}) => {
    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const func = ref.current;

            func.nome.value = onEdit.nome;
            func.idade.value = onEdit.idade;
            func.email.value = onEdit.cidade;
            func.senha.value = onEdit.senha;
            func.cpf.value = onEdit.time;
            func.cidade.value = onEdit.email;
            func.torcida.value = onEdit.cpf;
        }
    }, [onEdit]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const func = ref.current;

        if (
            !func.nome.value ||
            !func.idade.value ||
            !func.email.value ||
            !func.senha.value ||
            !func.cpf.value ||
            !func.cidade.value ||
            !func.torcida.value
        ) {
            return toast.warn("Preencha todos os campos!")
        }
        if(onEdit) {
            await axios
                .put(`http://localhost:3000/registro/funcionarios/`, {
                    id: onEdit.id,
                    nome: func.nome.value,
                    idade : func.idade.value,
                    email : func.email.value,
                    senha : func.senha.value,
                    cpf : func.cpf.value,
                    cidade : func.cidade.value,
                    torcida : func.torcida.value
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));

        } else {
            await axios
                .post("http://localhost:3000/registro/funcionarios", {
                    nome: func.nome.value,
                    idade : func.idade.value,
                    email : func.email.value,
                    senha : func.senha.value,
                    cpf : func.cpf.value,
                    cidade : func.cidade.value,
                    torcida : func.torcida.value
                })
                .then(({data}) => toast.success(data))
                .catch((err) => {
                    console.error(err);
                    toast.error("Erro ao salvar o cliente");
                });
                
        }
    setOnEdit(null);
    getFunc();
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
                <Label>Senha</Label>
                <Input name = "senha" type = "password"/>
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

export default FormFunc;