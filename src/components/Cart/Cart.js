import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

 
const Cart = (props) => {
  const item=useSelector(state=>state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {item.map(item=> <CartItem key={item.id}
          item={{ id: item.id, title: item.name, quantity: item.quantity, total: item.totalPrie, price: item.price }}
        />)}       
      </ul>
    </Card>
  );
};

export default Cart;
