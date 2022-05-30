import './inputSearch.css'

const InputSearch = ({showProducts}) =>{
  
  return(
    <div className='input_container'>
      <input type="search" placeholder='Digitar Pesquisa'  onChange={(event)=> showProducts(event.target.value)}/>
      <button>Pesquisar</button>
    </div>
  )
}
export default InputSearch;