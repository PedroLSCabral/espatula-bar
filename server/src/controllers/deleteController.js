const { Produto, Ingrediente, ProdutoIngrediente, Funcionario, Cliente, Venda } = require('../models');

class DeleteController {
    async deletarProduto(req, res) {
        try {
            const { id_produto } = req.body;
            const produto = await Produto.findOne({ where: { id_produto } });
            if (!produto) {
                return res.status(404).json({ error: `Produto com ID ${id_produto} não encontrado.` });
            }
            await Produto.destroy({ where: { id_produto } });
            res.status(200).json({ message: 'Produto deletado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar produto' });
        }
    }
    async deletarIngrediente(req, res) {
        try {
            const { id_ingrediente } = req.body;
            const ingrediente = await Ingrediente.findOne({ where: { id_ingrediente } });
            if (!ingrediente) {
                return res.status(404).json({ error: `Ingrediente com ID ${id_ingrediente} não encontrado.` });
            }
            await Ingrediente.destroy({ where: { id_ingrediente } });
            res.status(200).json({ message: 'Ingrediente deletado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar ingrediente' });
        }
    }
    async deletarProdutoIngrediente(req, res) {
        try {
            const { id_produto, id_ingrediente } = req.body;
            const produtoIngrediente = await ProdutoIngrediente.findOne({ where: { id_produto, id_ingrediente } });
            if (!produtoIngrediente) {
                return res.status(404).json({ error: `ProdutoIngrediente com ID ${id_produto} e Ingrediente ${id_ingrediente} não encontrado.` });
            }
            await ProdutoIngrediente.destroy({ where: { id_produto, id_ingrediente } });
            res.status(200).json({ message: 'ProdutoIngrediente deletado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar produto ingrediente' });
        }
    }
    async deletarFuncionario(req, res) {
        try {
            const { id_funcionario } = req.body;
            const funcionario = await Funcionario.findOne({ where: { id_funcionario } });
            if (!funcionario) {
                return res.status(404).json({ error: `Funcionário com ID ${id_funcionario} não encontrado.` });
            }
            await Funcionario.destroy({ where: { id_funcionario } });
            res.status(200).json({ message: 'Funcionário deletado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar funcionário' });
        }
    }
    async deletarCliente(req, res) {
        try {
            const { id_cliente } = req.body;
            const cliente = await Cliente.findOne({ where: { id_cliente } });
            if (!cliente) {
                return res.status(404).json({ error: `Cliente com ID ${id_cliente} não encontrado.` });
            }
            await Cliente.destroy({ where: { id_cliente } });
            res.status(200).json({ message: 'Cliente deletado com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar cliente' });
        }
    }
    async deletarVenda(req, res) {
        try {
            const { id_venda } = req.body;
            const venda = await Venda.findOne({ where: { id_venda } });
            if (!venda) {
                return res.status(404).json({ error: `Venda com ID ${id_venda} não encontrada.` });
            }
            await Venda.destroy({ where: { id_venda } });
            res.status(200).json({ message: 'Venda deletada com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar venda' });
        }
    }
}

module.exports = new DeleteController();