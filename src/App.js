import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isShow=useSelector(state=>state.ui.isShow);
  return (
    <Layout>
      { isShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
