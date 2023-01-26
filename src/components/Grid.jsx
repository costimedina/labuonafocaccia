import React from 'react';
import ProductCard from './ProductCard';
import { Container } from 'react-bootstrap';

const Grid = () => {
  return (
    <div className="myGrid">
        <ProductCard  />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

    </div>
  )
}

export default Grid