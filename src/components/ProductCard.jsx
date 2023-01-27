import { React, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import Context from '../context/Context';

const ProductCard = () => {

  const { products } = useContext(Context);

  return (
    <Card className="productCard flex-row">
        <Card.Body className="productCard__body">
            <h3 className="productCard__title">{products.clasicas.name} </h3>
            {/* <Card.Title className="productCard__title">La Bonita</Card.Title> */}
            <Card.Text className="productCard__desc">
            {products.clasicas.desc1}
            </Card.Text>
            <Card.Text className="productCard__price">${products.clasicas.price}</Card.Text>
            <Button variant="primary">Agregar</Button>
        </Card.Body>
        <span className='productCard__img_container'>
        <Card.Img className="productCard__img" src={products.clasicas.desc1} alt="mmm pizza" />

        </span>

    </Card>
  )
}

export default ProductCard