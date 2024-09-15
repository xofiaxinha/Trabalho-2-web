import { useState } from "react";

function FormEditarDespesa({titulo, valor, data}) {
    const [formstate, setFormState] = useState({
        titulo: titulo,
        valor: valor,
        data: data,
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
        </form>
    )
}

export default FormEditarDespesa;