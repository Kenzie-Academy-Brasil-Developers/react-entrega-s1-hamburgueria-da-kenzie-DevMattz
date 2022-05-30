import ItemCartList from '../ItemCartList/ItemCartList';
import './cartList.css'

const CartList = ({currentSale, handleClickRemove}) =>{
  
  return(
    <ul className='cart_lista'>
      {
        currentSale.length > 0 ?
        (
          currentSale.map((item)=>(
            <ItemCartList
              key={item.id}
              item={item}
              handleClickRemove={handleClickRemove}
            />
            
          ))
        ) :
        (
        <div className='cart_vazio'>
          <h2>Sua sacola esta vazia</h2>
          <p>Adicione Itens</p>
        </div>
        )  
      }
    </ul>
  )
}
export default CartList;