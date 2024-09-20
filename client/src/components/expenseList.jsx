import React, { useState, useEffect } from "react";
import axios from "axios";
import FormEditarDespesa from "./formEdit";
import {Table, TableHeader, TableRow, TableCell} from "./table/table";
import { TextButton, IconButton } from "./buttons";
import FormCadastroDespesa from "./formCadastro"
import SearchInput from "./searchButton";

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
        setSelectedExpense(null);
    }
    function handleAdd(expense){
        setExpenses([...expenses, expense]);
        //expenses.push(expense);
        setSelectedExpense(null);
    }
    function handleEdit(updatedExpense){
        console.log(updatedExpense);
        expenses.forEach((expense) => {
            if(expense.id === updatedExpense.id){
                expense.titulo = updatedExpense.titulo;
                expense.valor = updatedExpense.valor;
                expense.data = updatedExpense.data;
                expense.pago = updatedExpense.pago;
                //console.log("edited " + expense);
            }
        })
        setExpenses(expenses);  // Atualiza a lista de despesas com a despesa editada
        setSelectedExpense(null);  // Limpa a seleção após a atualização
        //console.log(expenses);
    };
    
    function compareObjects(object1, object2){
        return JSON.stringify(object1) === JSON.stringify(object2);
    }
    function handleDelete(id){
        const c = confirm("Deseja mesmo deletar essa despesa?");
        if(!c){
            return;
        }
        axios.delete(`http://localhost:3000/expenses/${id}`)
        .then(() => {
            setExpenses(expenses.filter(expense => expense.id !== id));
        })
        .catch(error => {
            console.error("Erro ao deletar despesa", error);
        })
    }
    const handleSearch = async (event) =>{
        const search = event.target.value;
        const response = await axios.get(`http://localhost:3000/expenses/${search}`);
        
        if(response.data) {setExpenses(response.data);}
    }
    function formatDate(dataString){
        const date = new Date(dataString);
        const dia = String(date.getUTCDate()).padStart(2, '0');
        const mes = String(date.getUTCMonth() + 1).padStart(2, '0'); // Os meses começam do zero
        const ano = date.getUTCFullYear();
        return `${dia}/${mes}/${ano}`;
    }
    //let teste = 0;
    return(
        //exemplo por enquanto que eu nao sei oq ta rolando
        <>
            <div className="add-button">
                <TextButton text="Adicionar despesa" className="header-button" onClick={() => setShowForm("Adicionar")}/>
            </div>
            {showForm === "Adicionar" ? <FormCadastroDespesa handleCancel={handleCancel} addExpense={handleAdd}/> : null}
            <SearchInput handleSearch={handleSearch}/>
            <Table>
                <TableRow>
                    <TableHeader>Despesa</TableHeader>
                    <TableHeader>Valor</TableHeader>
                    <TableHeader>Data</TableHeader>
                    <TableHeader>Pagamento</TableHeader>
                    <TableHeader>Ações</TableHeader>
                </TableRow>
            {expenses.map((expense) => (
                <TableRow key={expense.id}>
                    <TableCell><p>{expense.titulo}</p></TableCell>
                    <TableCell><p>{`R$ ${expense.valor}`}</p></TableCell>
                    <TableCell><p>{formatDate(expense.data)}</p></TableCell>
                    <TableCell className={expense.pago ? "pago" : "nao-pago"}><p>{expense.pago ? "Pago" : "Não pago"}</p></TableCell>
                    <TableCell>
                        <div className="buttons actions">
                            <IconButton onClick={() => handleSelect(expense)} source="https://img.icons8.com/?size=100&id=114092&format=png&color=FEFCF6" alt="editar"/>
                            <IconButton onClick={() => handleDelete(expense.id)} source="https://img.icons8.com/?size=100&id=114052&format=png&color=FEFCF6" alt="deletar"/>
                        </div>
                    </TableCell>
                {showForm === "Editar" && compareObjects(selectedExpense, expense) ? <FormEditarDespesa expense={selectedExpense} handleCancel={handleCancel} editExpense={handleEdit}/> : null}
                </TableRow>
            ))}
            </Table>
        </>
    )
}

export default ExpenseList;