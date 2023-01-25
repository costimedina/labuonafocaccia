import React from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const Menu = () => {
  return (
    <Container className="mainCont">
        <h2 className="mainCont__title">DE LA BUONA</h2>
        <div className='row justify-content-start'>
            <div col-lg-3 className='col'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

            </div>
        </div>
        
         

   
    </Container>
  )
}

export default Menu