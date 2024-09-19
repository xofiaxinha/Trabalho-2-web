import axios from "axios";
import { useState } from "react";

function FormCadastroDespesa({handleCancel, addExpense}){
    const [formstate, setFormState] = useState({
        titulo: "",
        valor: 0,
        data: "",
        pago: false
    })
    const handleChange = (event) => {
        let {id, value, type} = event.target;
        setFormState({
            ...formstate,
            [id]: type === "checkbox" ? !formstate.pago : value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post("http://localhost:3000/expenses", formstate);
            addExpense(formstate);
            handleCancel();
        }
        catch(error){
            console.error("Erro ao cadastrar despesa", error);
            handleCancel();
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="titulo">Título da despesa</label>
            <input type="text" id="titulo" placeholder="Escreva aqui o título" onChange={handleChange}/>
            <label htmlFor="valor">Valor da despesa</label>
            <input type="number" step="0.01" id="valor" placeholder="Escreva aqui o valor" onChange={handleChange}/>
            <label htmlFor="data">Data da despesa</label>
            <input type="date" id="data" placeholder="Insira a data aqui a data" onChange={handleChange}/>
            <label htmlFor="pago">Pago?</label>
            <input type="checkbox" id="pago" onChange={handleChange}/>
            <button type="submit">Cadastrar despesa</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
    )
}

export default FormCadastroDespesa;