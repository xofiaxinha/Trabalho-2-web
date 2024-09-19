import { useState } from "react";
import axios from "axios";

function FormEditarDespesa({expense, handleCancel, editExpense}) {
    //console.log("chegooo");
    const [formstate, setFormState] = useState({
        id: expense.id,
        titulo: expense.titulo,
        valor: expense.valor,
        data: expense.data,
        pago: expense.pago
    });

    function handleChange(event){
        let {id, value, type} = event.target;
        setFormState({
            ...formstate,
            [id]: type === "checkbox" ? !formstate.pago : value
        });
    }
    //TODO: implementar o submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.put(`http://localhost:3000/expenses/${expense.id}`, formstate);
            editExpense(formstate);
            handleCancel();
        }
        catch(error){
            console.error("Erro ao editar despesa", error);
            handleCancel();
        }
    }
    return(
        <form onSubmit={handleSubmit} className="edit-form">
            <label htmlFor="titulo">Título da despesa</label>
            <input type="text" id="titulo" value={formstate.titulo} onChange={handleChange}/>
            <label htmlFor="valor">Valor da despesa</label>
            <input type="number" step="0.01" id="valor" value={formstate.valor} onChange={handleChange}/>
            <label htmlFor="data">Data da despesa</label>
            <input type="date" id="data" value={formstate.data} onChange={handleChange}/>
            <label htmlFor="pago">Pago?</label>
            <input type="checkbox" id="pago" onChange={handleChange} checked={formstate.pago}/>
            <button type="submit">Editar despesa</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
    )
}

export default FormEditarDespesa;