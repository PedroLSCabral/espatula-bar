import React, {useRef, useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { FormContainer, InputArea, Button, Label, Input } from "../../styles/styledConsts";

const FormProduto = ({onEdit, setOnEdit, getProduto}) => {
    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const produto = ref.current;

            produto.nome.value = onEdit.nome;
            produto.qtd.value = onEdit.qtd;
            produto.preco.value = onEdit.preco;
            produto.categoria.value = onEdit.categoria;
        }
    }, [onEdit]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const produto = ref.current;

        if (
            !produto.nome.value ||
            !produto.qtd.value ||
            !produto.preco.value ||
            !produto.categoria.value  
        ) {
            return toast.warn("Preencha todos os campos!")
        }
        if(onEdit) {
            await axios
                .put(`http://localhost:3000/registro/produtos/`, {
                    id: onEdit.id,
                    nome: produto.nome.value,
                    qtd : produto.qtd.value,
                    preco : produto.preco.value,
                    categoria : produto.categoria.value,
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));

        } else {
            await axios
                .post("http://localhost:3000/registro/produtos", {
                    nome: produto.nome.value,
                    qtd : produto.qtd.value,
                    preco : produto.preco.value,
                    categoria : produto.categoria.value,
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
                <Label>Quantidade</Label>
                <Input name = "qtd" type = "number"/>
            </InputArea>
            <InputArea>
                <Label>Preço</Label>
                <Input name = "preco" type = "number" step = "0.01" min = "0"/>
            </InputArea>
            <InputArea>
                <Label>Categoria</Label>
                <Input name = "categoria"/>
            </InputArea>

            <Button type = "submit">SALVAR</Button>
        </FormContainer>

    );
};

export default FormProduto;