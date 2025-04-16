import React, {useRef, useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { FormContainer, InputArea, Button, Label, Input } from "../../styles/styledConsts";

const FormIng = ({onEdit, setOnEdit, getIng}) => {
    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const ingred = ref.current;

            ingred.nome.value = onEdit.nome;
            ingred.qtd.value = onEdit.qtd;
            ingred.categoria.value = onEdit.categoria;
            ingred.preco.value = onEdit.preco;
        }
    }, [onEdit]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const ingred = ref.current;

        if (
            !ingred.nome.value ||
            !ingred.qtd.value ||
            !ingred.categoria.value 
        ) {
            return toast.warn("Preencha todos os campos!")
        }
        if(onEdit) {
            await axios
                .put(`http://localhost:3000/update/ingredientes/`, {
                    id: onEdit.id,
                    nome: ingred.nome.value,
                    qtd : ingred.qtd.value,
                    categoria : ingred.categoria.value,
                    
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));

        } else {
            await axios
                .post("http://localhost:3000/registro/ingredientes/", {
                    nome: ingred.nome.value,
                    qtd : ingred.qtd.value,
                    categoria : ingred.categoria.value,
                   
                })
                .then(({data}) => toast.success(data))
                .catch((err) => {
                    console.error(err);
                    toast.error("Erro ao salvar o ingrediente");
                });
                
        }
    setOnEdit(null);
    getIng();
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
                <Label>Categoria</Label>
                <Input name = "categoria"/>
            </InputArea>

            <Button type = "submit">SALVAR</Button>
        </FormContainer>

    );
};

export default FormIng;