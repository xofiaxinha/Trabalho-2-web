import { useState } from "react";

function FormEditarDespesa({expense, handleCancel}) {
    //console.log("chegooo");
    const [formstate, setFormState] = useState({
        titulo: expense.title,
        valor: expense.value,
        data: expense.date,
    })

    function handleChange(event){
        const {id, value} = event.target;
        setFormState({
            ...formstate,
            [id]: value
        });
    }
    //TODO: implementar o submit
    return(
        <form>
            <label htmlFor="titulo">Título da despesa</label>
            <input type="text" id="titulo" value={formstate.titulo} onChange={handleChange}/>
            <label htmlFor="valor">Valor da despesa</label>
            <input type="number" step="0.01" id="valor" value={formstate.valor} onChange={handleChange}/>
            <label htmlFor="data">Data da despesa</label>
            <input type="date" id="data" value={formstate.valor} onChange={handleChange}/>
            <button type="submit">Editar despesa</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
    )
}

export default FormEditarDespesa;