import React, { useState, useEffect } from "react";
import axios from "axios";
import FormEditarDespesa from "./formEdit";

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

    const [showForm, setShowForm] = useState("Nenhum");

    return(
        //exemplo por enquanto que eu nao sei oq ta rolando
        <>
            {showForm === "Editar Fornecedor" ? <FormEditarDespesa titulo="Despesa 1" valor="100.00" data="2021-01-01"/> : null}
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Despesa 1</td>
                        <td>R$ 100,00</td>
                        <td>01/01/2021</td>
                        <td>
                            <button onClick={() => setShowForm("Editar Fornecedor")}>Editar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Despesa 2</td>
                        <td>R$ 200,00</td>
                        <td>02/01/2021</td>
                        <td>
                            <button onClick={() => setShowForm("Editar Fornecedor")}>Editar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ExpenseList;