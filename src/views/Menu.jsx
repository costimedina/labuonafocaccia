import React from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const Menu = () => {
  return (
    <Container className="mainCont">
        <Row>
            <Col>
                <h2 className="mainCont__title">DE LA BUONA</h2>
                <ProductCard />
            </Col>

        </Row>

   
    </Container>
  )
}

export default Menu