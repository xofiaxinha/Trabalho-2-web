
export default function SearchInput({handleSearch}){
    return(
        <div className="search-button">
            <input type="text" placeholder="Pesquisar Despesa" onChange={handleSearch}/>
            <div className="icon"><img src="https://img.icons8.com/?size=100&id=111487&format=png&color=EF6199" alt="" srcset="" /></div>
        </div>
    )
}