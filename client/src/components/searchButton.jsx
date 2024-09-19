
export default function SearchInput({handleSearch}){
    return(
        <input type="text" placeholder="Pesquisar Despesa" onChange={handleSearch}/>
    )
}