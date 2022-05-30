import './itemCartList.css'

const ItemCartList = ({item, handleClickRemove}) =>{
  return(
    <li className='cart_item' >
      <figure>
        <img src={item.img} alt={item.name} />
      </figure>
      
      <div className='cart_infos'>
        <h2>{item.name}</h2>
        <small>{item.category}</small>
      </div>
        
      <div className='cart_remover'>
        <p onClick={() => handleClickRemove (item)}>Remover</p>
      </div>
    </li>
  )
}
export default ItemCartList;