import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_MEALS=[
    {
    id:"p1",
    title:"mangue",
    price:2500,
    description:"This is a first product - amazing"
    
  },
  {
    id:"p2",
    title:"orange",
    price:2500,
    description:"This is a first product - amazing"
  }
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_MEALS.map(items=><ProductItem
          key={items.id}
          id={items.id}
          title={items.title}
          price={items.price}
          description={items.description}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
