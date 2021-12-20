import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const {id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const addCart=()=>{
    dispatch(cartActions.addItems({
      id,
      title,
      price
    }))
  }

  const removeCart=()=>{
    dispatch(cartActions.removeItems(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCart} >-</button>
          <button onClick={addCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
