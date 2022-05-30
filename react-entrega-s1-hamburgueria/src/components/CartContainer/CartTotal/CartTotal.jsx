import './cartTotal.css'

const CardTotal = ({currentSale, handleClickRemoveAll}) =>{

  return(
    <>
    {
      currentSale.length > 0 &&
      (
      <div className='cart_total'>
        <div className='cart_total__infos'>
          <p>Total</p>
          <p>R$ {currentSale.reduce((acc, {price})=> acc + price, 0).toFixed(2)}</p>
        </div>
        <button onClick={() => handleClickRemoveAll(currentSale)}>Remover Todos</button>
      </div>
      )
    }
    </>
  )
}
export default CardTotal;
