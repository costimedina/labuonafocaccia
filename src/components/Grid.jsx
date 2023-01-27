import { React, useContext } from 'react';
import ProductCard from './ProductCard';
import Context from '../context/Context';


const Grid = () => {

 const { products } = useContext(Context);

  return (
    <div className="myGrid">

        <ProductCard  />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />


    </div>
  )
}

export default Grid