import Product from '../Product/Product';
import './productsList.css'

const ProductsList = ({products, handleClick})=>{
  return(
    <ul className='lista'>
      {
        products.map(({img, name, category, price, id})=>(
          <Product
          img={img}
          name={name}
          category={category}
          price={price}
          key={id}
          id={id}
          handleClick={handleClick}
        />
        ))
      }
    </ul>
  )
}
export default ProductsList;