const { Produto, Ingrediente, ProdutoIngrediente, Funcionario, Cliente, Venda} = require('../models');

class CompraController {
    async criarCompra(req, res) {
        try {
            const { items, id_funcionario, id_cliente} = req.body;

            const funcionario = await Funcionario.findOne({ where: { id_funcionario } });
            if (!funcionario) {
                return res.status(404).json({ error: `Funcionário com ID ${id_funcionario} não encontrado.` });
            }
            const cliente = await Cliente.findOne({ where: { id_cliente } });
            if (!cliente) {
                return res.status(404).json({ error: `Cliente com ID ${id_cliente} não encontrado.` });
            }

            const updatesProdutos =[];
            const updatesIngredientes =[];
            var total = 0;

                for (const item of items) {
                    const produto = await Produto.findOne({ where: { id_produto: item.id_produto } });
                    if (!produto) {
                        return res.status(404).json({ error: `Produto com ID ${item.id_produto} não encontrado.` });
                    }

                    const ingredientes = await ProdutoIngrediente.findAll({
                        where: { id_produto: item.id_produto },
                        include: [{
                            model: Ingrediente,
                            as: 'ingrediente',
                            attributes: ['id_ingrediente', 'nome', 'qtd']
                        }]
                    });

                    if (!ingredientes) {
                        return res.status(404).json({ error: `Ingredientes para o produto com ID ${item.id_produto} não encontrados.` });
                    }

                    if (ingredientes && ingredientes.length === 0) {
                        if (item.qtd > produto.qtd) {
                            return res.status(400).json({ error: `Quantidade insuficiente do produto ${item.id_produto}.` });
                        }
                        updatesProdutos.push({
                            id_produto: item.id_produto,
                            qtd: produto.qtd - item.qtd
                        });
                        total += produto.preco * item.qtd;
                    }
                    
                    if (ingredientes && ingredientes.length > 0) {
                        for (const pi of ingredientes) {
                            if (pi.ingrediente.qtd < item.qtd*pi.qtd) {
                                return res.status(400).json({ error: `Quantidade insuficiente do ingrediente ${pi.ingrediente.nome} para o produto ${item.id_produto}.` });
                            }
                            updatesIngredientes.push({
                                id_ingrediente: pi.ingrediente.id_ingrediente,
                                qtd: pi.ingrediente.qtd - item.qtd * pi.qtd
                            });
                            total += produto.preco * item.qtd;
                        }
                    }
                }

            for (const update of updatesProdutos) {
                await Produto.update(
                    { qtd: update.qtd },
                    { where: { id_produto: update.id_produto }
                });
            }

            for (const update of updatesIngredientes) {
                await Ingrediente.update(
                    { qtd: update.qtd },
                    { where: { id_ingrediente: update.id_ingrediente } }
                );
            }

            for (const item of items) {
                const produto = await Produto.findOne({ where: { id_produto: item.id_produto } });
                if (!produto) {
                    return res.status(404).json({ error: `Produto com ID ${item.id_produto} não encontrado.` });
                }
                const venda = await Venda.create({
                    id_produto: item.id_produto,
                    qtd: item.qtd,
                    id_funcionario,
                    id_cliente,
                    total: produto.preco * item.qtd
                });
            }
            
            return res.status(200).json({ message: 'Compra criada com sucesso.' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar compra.' });
        }
    }
}

module.exports = new CompraController();
