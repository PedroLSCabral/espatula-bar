import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {toast} from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Label = styled.label``;

const Input = styled.input`
    width: 120px;
    padding: 0px 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;


const Form = ({onEdit, setOnEdit, getProduto}) => {
    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const produto = ref.current;

            produto.nome.value = onEdit.nome;
            produto.tipo.value = onEdit.tipo;
            produto.qtd.value = onEdit.qtd;
            produto.preco.value = onEdit.preco;
        }
    }, [onEdit]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const produto = ref.current;

        if (//Garant6e que os campos serão preenchidos
            !produto.nome.value ||
            !produto.tipo.value ||
            !produto.qtd.value ||
            !produto.preco.value 
        ) {
            return toast.warn("Preencha todos os campos!")//Exibe a mansagem e erro caso não estejam
        }
        if(onEdit) {
            await axios
                .put(`http://140.238.181.193:3000/produtos/`, {
                    id: onEdit.id,
                    nome: produto.nome.value,
                    tipo : produto.tipo.value,
                    qtd : produto.qtd.value,
                    preco : produto.preco.value,
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));

        } else {
            await axios
                .post("http://140.238.181.193:3000/produtos", {
                    nome: produto.nome.value,
                    tipo : produto.tipo.value,
                    qtd : produto.qtd.value,
                    preco : produto.preco.value,
                })
                .then(({data}) => toast.success(data))
                .catch((err) => {
                    console.error(err);
                    toast.error("Erro ao salvar o produto");
                });
                
        }
    setOnEdit(null);
    getProduto();
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
                <Label>Tipo</Label>
                <Input name = "tipo"/>
            </InputArea>
            <InputArea>
                <Label>Quantidade</Label>
                <Input name = "qtd" type = "number"/>
            </InputArea>
            <InputArea>
                <Label>Preço</Label>
                <Input name = "preco" type = "number" step = "0.01" min = "0"/>
            </InputArea>

            <Button type = "submit">SALVAR</Button>
        </FormContainer>

    );
};

export default Form;