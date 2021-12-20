import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice'

const CartButton = (props) => {
  const item=useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch();
  const handleClick=()=>{
    dispatch(uiActions.toogle());
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{item}</span>
    </button>
  );
};

export default CartButton;
