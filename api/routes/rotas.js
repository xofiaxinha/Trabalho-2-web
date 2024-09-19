/* Rotas da aplicação
    GET /expenses - Retorna a lista de despesas ✔️
    POST /expenses - Adiciona uma nova despesa ✔️
    GET /expenses/:id - Retorna uma despesa específica ✔️
    PUT /expenses/:id - Atualiza uma despesa específica
    DELETE /expenses/:id - Deleta uma despesa específica
*/
const express = require('express');
const router = express.Router();
router.use(express.json());
const { Expense } = require('../models');
const { Op } = require('sequelize');

router.get('/expenses', async (req, res) =>{
    const expensesList = await Expense.findAll();
    res.json(expensesList);
})
/*
router.get('/expenses/:id', async (req, res) =>{
    try{
        const expense = await Expense.findByPk(req.params.id);
        res.json(expense);
    }
    catch(err){
        res.status(404).send('Despesa não encontrada');
    }
})*/
router.get('/expenses/:name', async (req, res) =>{
    const {name} = req.params;
    try{
        const expense = await Expense.findAll({where: {titulo: {[Op.like]: `%${name}%`}}});
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
        const ex = await Expense.create({titulo: titulo, valor: valor, data: data, pago: isPaid});
        console.log(ex)
        res.status(201).json(ex);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
})
router.put('/expenses/:id', async (req, res) =>{
    const {titulo, valor, data, pago} = req.body;
    try{
        const [updated] = await Expense.update({titulo: titulo, valor: valor, data: data, pago: pago}, {where: {id: req.params.id}});
        if(updated){
            const updatedExpense = await Expense.findByPk(req.params.id);
            return res.status(200).json(updatedExpense);
        }
        else{
            res.status(404).send('Despesa não encontrada');
        }
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
})
router.delete('/expenses/:id', async (req, res) =>{
    try{
        const deleted = await Expense.destroy({where: {id: req.params.id}});
        if(deleted){
            res.status(204).send();
        }
        else{
            res.status(404).send('Despesa não encontrada');
        }
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
})


module.exports = router;