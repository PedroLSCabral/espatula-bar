const {Produto, Ingrediente, ProdutoIngrediente, Funcionario, Cliente, Venda, RelatorioVendas} = require('../models');

class ConsultaController {
    async consultarProduto(req, res) {
        try {
            const produtos = await Produto.findAll({});
            res.status(200).json(produtos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao consultar produtos' });
        }
    }
    async consultarIngrediente(req, res) {
        try {
            const ingredientes = await Ingrediente.findAll();
            res.status(200).json(ingredientes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao consultar ingredientes' });
        }
    }
    async consultarProdutoIngrediente(req, res) {
        try {
            const produtosIngredientes = await ProdutoIngrediente.findAll({});
            res.status(200).json(produtosIngredientes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao consultar produtos ingredientes' });
        }
    }
    async consultarFuncionario(req, res) {
        try {
            const funcionarios = await Funcionario.findAll();
            res.status(200).json(funcionarios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao consultar funcionários' });
        }
    }
    async consultarCliente(req, res) {
        try {
            const clientes = await Cliente.findAll();
            res.status(200).json(clientes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao consultar clientes' });
        }
    }
    async consultarVenda(req, res) {
        try {
            const vendas = await Venda.findAll({});
            res.status(200).json(vendas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao consultar vendas' });
        }
    }
    async consultarRelatorioVendas(req, res) {
        try {
            const relatorioVendas = await RelatorioVendas.findAll({});
            res.status(200).json(relatorioVendas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao consultar relatorio vendas' });
        }
    }
}

module.exports = new ConsultaController();