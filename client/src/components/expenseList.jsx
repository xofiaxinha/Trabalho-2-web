import React, { useState, useEffect } from "react";
import axios from "axios";
import FormEditarDespesa from "./formEdit";
import {Table, TableHeader, TableRow, TableCell} from "./table/table";
import { TextButton, IconButton } from "./buttons";

function ExpenseList(){
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try{
            const response = await axios.get("http://localhost:3000/expenses");
            setExpenses(response.data);
        }
        catch(error){
            console.error("Erro ao buscar despesas", error);
        }
    }

    /*const expenses = [
        {
            id: 1,
            title: "Despesa 1",
            value: 100.00,
            date: "01/01/2021"
        },
        {
            id: 2,
            title: "Despesa 2",
            value: 200.00,
            date: "02/01/2021"
        }
    ];*/
    const [showForm, setShowForm] = useState("Nenhum");
    const [selectedExpense, setSelectedExpense] = useState({});

    useEffect(() => {
        console.log(selectedExpense);
    }, [selectedExpense]);
    
    function handleSelect(expense){
        setShowForm("Editar");
        setSelectedExpense(expense);
    }
    function handleCancel(){
        setShowForm("Nenhum");
    }
    function compareObjects(object1, object2){
        return JSON.stringify(object1) === JSON.stringify(object2);
    }
    return(
        //exemplo por enquanto que eu nao sei oq ta rolando
        <>
            <Table>
                <TableRow>
                    <TableHeader>Despesa</TableHeader>
                    <TableHeader>Valor</TableHeader>
                    <TableHeader>Data</TableHeader>
                    <TableHeader>Ações</TableHeader>
                </TableRow>
            </Table>
            {expenses.map(expense => (
                <TableRow key={expense.id}>
                    <TableCell>
                        <p>{expense.titulo}</p>
                    </TableCell>
                    <TableCell>
                        <p>{expense.valor}</p>
                    </TableCell>
                    <TableCell>
                        <p>{expense.data}</p>
                    </TableCell>
                    <TableCell>
                        <TextButton text="Editar" onClick={() => handleSelect(expense)}/><TextButton text="Excluir"/>
                    </TableCell>
                {showForm === "Editar" && compareObjects(selectedExpense, expense) ? <FormEditarDespesa expense={selectedExpense} handleCancel={handleCancel}/> : null}
                </TableRow>
            ))}
        </>
    )
}

export default ExpenseList;