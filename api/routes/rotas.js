/* Rotas da aplicação
    GET /expenses - Retorna a lista de despesas
    POST /expenses - Adiciona uma nova despesa
    GET /expenses/:id - Retorna uma despesa específica
    PUT /expenses/:id - Atualiza uma despesa específica
    DELETE /expenses/:id - Deleta uma despesa específica
*/
const express = require('express');
const router = express.Router();
router.use(express.json());
const { Expenses } = require('../models');

router.get('/expenses', async (req, res) =>{
    const expensesList = await Expenses.findAll();
    res.json(expensesList);
})
router.get('/expenses/:id', async (req, res) =>{
    try{
        const expense = await Expenses.findByPk(req.params.id);
        res.json(expense);
    }
    catch(err){
        res.status(404).send('Despesa não encontrada');
    }
})
router.post('/expenses', async (req, res) =>{
    const {titulo, valor, data, pago} = req.body;
    //console.log(titulo, valor, data, pago);
    const isPaid = pago === 'Sim' ? true : false;
    //console.log(isPaid);
    try{
        const ex = await Expenses.create({titulo: titulo, valor: valor, data: data, pago: isPaid});
        console.log(ex)
        res.status(201).json(ex);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
})

module.exports = router;