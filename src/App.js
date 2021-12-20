import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isShow=useSelector(state=>state.ui.isShow);
  const cart=useSelector(state=>state.cart)
  useEffect(() => {
    fetch("https://redux-45033-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart)
    })
  }, [cart])
  return (
    <Layout>
      { isShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
