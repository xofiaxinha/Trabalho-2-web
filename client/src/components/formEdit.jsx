import { useState } from "react";
import axios from "axios";
import { TextButton } from "./buttons";

function FormEditarDespesa({expense, handleCancel, editExpense}) {
    //console.log("chegooo");
    const [formstate, setFormState] = useState({
        id: expense.id,
        titulo: expense.titulo,
        valor: expense.valor,
        data: expense.data.split("T")[0],
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
        <div className="form-before">
            <div className="form edit">
                <form onSubmit={handleSubmit} className="edit-form">
                    <label htmlFor="titulo">Título da despesa</label>
                    <input type="text" id="titulo" value={formstate.titulo} onChange={handleChange}/>
                    <label htmlFor="valor">Valor da despesa</label>
                    <input type="number" step="0.01" id="valor" value={formstate.valor} onChange={handleChange}/>
                    <label htmlFor="data">Data da despesa</label>
                    <input type="date" id="data" value={formstate.data} onChange={handleChange}/>
                    {console.log(formstate.data)}
                    <label htmlFor="pago">Pago?</label>
                    <input type="checkbox" id="pago" onChange={handleChange} checked={formstate.pago}/>
                    <div className="buttons">
                        <TextButton text="Editar despesa" className="header-button" type="submit"/>
                        <TextButton text="Cancelar" className="header-button" onClick={handleCancel}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormEditarDespesa;