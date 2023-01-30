import { React, useContext } from 'react';
import ProductCard from './ProductCard';
import Context from '../context/Context';



const Grid = ({data}) => {
  
  const { products, setProducts } = useContext(Context);


  return (
    <div className="myGrid">
   {data.map((e)=>(
    <ProductCard product={e}/>
   ))}
    
    </div>
  );
}

export default Grid;