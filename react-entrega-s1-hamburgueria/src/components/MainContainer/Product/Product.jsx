import './product.css'

const Product = ({img, name, category, price, id, handleClick}) =>{
  return(
    <li className='lista_item' key={id} >
      <figure>
        <img src={img} alt={name} className='product_img'/>
      </figure>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>R$ {price.toFixed(2)}</p>
      <button id={id} onClick={(event) => handleClick(event.target.id)}>Adicionar</button>
    </li>
  )
}

export default Product;