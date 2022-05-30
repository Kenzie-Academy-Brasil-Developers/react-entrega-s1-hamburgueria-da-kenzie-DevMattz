import './cart.css'

const Cart = ({children}) =>{
  return(
    <section className='cart_container'>
      <>
      <div className='cart_container__header'>
        <h2>Carrinho de Compras</h2>
      </div>
      
      {children}
      </>
    </section>
  )
}
export default Cart;