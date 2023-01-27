import { React, useContext } from 'react';
import ProductCard from './ProductCard';
import Context from '../context/Context';



const Grid = ({data}) => {

  const { products, setProducts } = useContext(Context);

  return (
    <div className="myGrid">
      {data.clasicas.map((p, i)=> (
        <ProductCard product={p} key={i}/>
      ))}
    
    </div>
  );
}

export default Grid;