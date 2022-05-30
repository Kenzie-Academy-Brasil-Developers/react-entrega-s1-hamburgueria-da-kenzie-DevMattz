import { useEffect, useState } from 'react';
import Cart from './components/CartContainer/Cart/Cart';
import CartList from './components/CartContainer/CartList/CartList';
import CardTotal from './components/CartContainer/CartTotal/CartTotal';
import Header from './components/HeaderContainer/Header/Header';
import InputSearch from './components/HeaderContainer/InputSearch/InputSearch';
import Logo from './components/HeaderContainer/Logo/Logo';
import Main from './components/MainContainer/Main/Main';
import ProductsList from './components/MainContainer/ProductsList/ProductsList';

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then(res => res.json())
      .then(res => setProducts(res));
  }, []);

  const handleClick = id => {
    const CLICKED_ITEM = products.find(item => item.id === Number(id));
    const IDENTIFICADORES = currentSale
      .filter(({ id }) => id)
      .map(item => Number(item.id));

    if (!IDENTIFICADORES.includes(Number(id))) {
      setCurrentSale([CLICKED_ITEM, ...currentSale]);
    }
  };

  const showProducts = value => {
    setFilteredProducts(
      products.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleClickRemove = item =>
    setCurrentSale([...currentSale.filter(elemento => elemento !== item)]);

  const handleClickRemoveAll = item =>
    setCurrentSale([...currentSale.filter(elemento => elemento === item)]);

  return (
    <>
      <Header>
        <Logo />
        <InputSearch showProducts={showProducts} />
      </Header>

      <Main>
        <ProductsList
          products={filteredProducts.length > 0 ? filteredProducts : products}
          handleClick={handleClick}
        />
        <Cart>
          <CartList
            currentSale={currentSale}
            handleClickRemove={handleClickRemove}
          />
          <CardTotal
            currentSale={currentSale}
            handleClickRemoveAll={handleClickRemoveAll}
          />
        </Cart>
      </Main>
    </>
  );
}

export default App;
