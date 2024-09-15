function FormCadastroDespesa(){
    return(
        <form>
            <label htmlFor="titulo">Título da despesa</label>
            <input type="text" id="titulo" placeholder="Escreva aqui o título"/>
            <label htmlFor="valor">Valor da despesa</label>
            <input type="number" step="0.01" id="valor" placeholder="Escreva aqui o valor"/>
            <label htmlFor="data">Data da despesa</label>
            <input type="date" id="data" placeholder="Insira a data aqui a data"/>
            <button type="submit">Cadastrar despesa</button>
        </form>
    )
}

export default FormCadastroDespesa;