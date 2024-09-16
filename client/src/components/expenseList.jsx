import React, { useState, useEffect } from "react";
import axios from "axios";
import FormEditarDespesa from "./formEdit";
import {Table, TableHeader, TableRow, TableCell} from "./table/table";
import { TextButton, IconButton } from "./buttons";

function ExpenseList(){
    /*
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try{
            const response = await axios.get("http://localhost:3000/expenses").then(response => {
                console.log(response.data);
            });
            //setExpenses(response.data);
        }
        catch(error){
            console.error("Erro ao buscar despesas", error);
        }
    }

    useEffect(() => {
        fetchExpenses();
    }, []);*/
    const expenses = [
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
    ];
    const [showForm, setShowForm] = useState("Nenhum");
    const [selectedExpense, setSelectedExpense] = useState(expenses[0]);

    function handleSelect(expense){
        setSelectedExpense(expense);
        useEffect(() => {
            setShowForm("Editar");
        }, [selectedExpense]);
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
                        <p>{expense.title}</p>
                    </TableCell>
                    <TableCell>
                        <p>{expense.value}</p>
                    </TableCell>
                    <TableCell>
                        <p>{expense.date}</p>
                    </TableCell>
                    <TableCell>
                        <TextButton text="Editar" onClick={() => handleSelect(expense)}/>
                        <TextButton text="Excluir"/>
                    </TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default ExpenseList;