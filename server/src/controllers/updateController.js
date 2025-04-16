const {Produto, Ingrediente, ProdutoIngrediente, Funcionario, Cliente, Venda} = require('../models');

class UpdateController {
    async atualizarProduto(req, res) {
        try {
            const { id_produto, nome, preco, qtd } = req.body;
            const produto = await Produto.findOne({ where: { id_produto } });
            if (!produto) {
                return res.status(404).json({ error: `Produto com ID ${id_produto} não encontrado.` });
            }
            await Produto.update({ nome, preco, qtd }, { where: { id_produto } });
            res.status(200).json({ message: 'Produto atualizado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    }
    async atualizarIngrediente(req, res) {
        try {
            const { id_ingrediente, nome, qtd } = req.body;
            const ingrediente = await Ingrediente.findOne({ where: { id_ingrediente } });
            if (!ingrediente) {
                return res.status(404).json({ error: `Ingrediente com ID ${id_ingrediente} não encontrado.` });
            }
            await Ingrediente.update({ nome, qtd }, { where: { id_ingrediente } });
            res.status(200).json({ message: 'Ingrediente atualizado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar ingrediente' });
        }
    }
    async atualizarProdutoIngrediente(req, res) {
        try {
            const { id_produto, id_ingrediente, qtd } = req.body;
            const produtoIngrediente = await ProdutoIngrediente.findOne({ where: { id_produto, id_ingrediente } });
            if (!produtoIngrediente) {
                return res.status(404).json({ error: `ProdutoIngrediente com ID ${id_produto} e Ingrediente ${id_ingrediente} não encontrado.` });
            }
            await ProdutoIngrediente.update({ qtd }, { where: { id_produto, id_ingrediente } });
            res.status(200).json({ message: 'ProdutoIngrediente atualizado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar produto ingrediente' });
        }
    }
    async atualizarFuncionario(req, res) {
        try {
            const { id_funcionario, nome, cargo } = req.body;
            const funcionario = await Funcionario.findOne({ where: { id_funcionario } });
            if (!funcionario) {
                return res.status(404).json({ error: `Funcionário com ID ${id_funcionario} não encontrado.` });
            }
            await Funcionario.update({ nome, cargo }, { where: { id_funcionario } });
            res.status(200).json({ message: 'Funcionário atualizado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar funcionário' });
        }
    }
    async atualizarCliente(req, res) {
        try {
            const { id_cliente, nome, telefone } = req.body;
            const cliente = await Cliente.findOne({ where: { id_cliente } });
            if (!cliente) {
                return res.status(404).json({ error: `Cliente com ID ${id_cliente} não encontrado.` });
            }
            await Cliente.update({ nome, telefone }, { where: { id_cliente } });
            res.status(200).json({ message: 'Cliente atualizado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar cliente' });
        }
    }
    async atualizarVenda(req, res) {
        try {
            const { id_venda, id_produto, qtd, id_funcionario, id_cliente } = req.body;
            const venda = await Venda.findOne({ where: { id_venda } });
            if (!venda) {
                return res.status(404).json({ error: `Venda com ID ${id_venda} não encontrada.` });
            }
            await Venda.update({ id_produto, qtd, id_funcionario, id_cliente }, { where: { id_venda } });
            res.status(200).json({ message: 'Venda atualizada com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar venda' });
        }
    }
}

module.exports = new UpdateController();