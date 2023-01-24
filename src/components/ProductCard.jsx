import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <Card className="productCard shadow">
        <Card.Body className="productCard__body">
            <Card.Title className="productCard__title">La Bonita</Card.Title>
            <Card.Text className="productCard__desc">
            Cebolla caramelizada, tomates asados y orégano.
            </Card.Text>
            <Card.Text className="productCard__price">$9.900</Card.Text>
            <Button variant="primary">Agregar al carro</Button>
        </Card.Body>
        <span className='productCard__img_container'>
        <Card.Img className="productCard__img" variant="bottom" src="https://img.pizza/300/300" alt="mmm pizza" />

        </span>

    </Card>
  )
}

export default ProductCard