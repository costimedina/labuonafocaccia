import React from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from '../components/Grid';

const Menu = () => {
  return (
    <Container className='mainCont p-0'>
      <section>
        <h2 className="mainCont__title">DE LA BUONA</h2>
        <Grid />
      </section>

      <section className='mt-5'>
        <h2 className="mainCont__title">DE LA BUONA</h2>
        <Grid />
      </section>

      <section className='mt-5'>
        <h2 className="mainCont__title">DE LA BUONA</h2>
        <Grid />
      </section>
    
        
         

   
    </Container>
  )
}

export default Menu