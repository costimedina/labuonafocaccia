import { React, useContext } from 'react';
import { Container } from 'react-bootstrap';
import Grid from '../components/Grid';
import Context from '../context/Context';

const Menu = () => {

  const { products, setProducts } = useContext(Context);
// console.log(products)
  return (
    <Container className='mainCont p-0'>
      <section>
        <h2 className="mainCont__title">DE LA BUONA</h2>
        <Grid data={products}/>
      </section>
    
        
         

   
    </Container>
  )
}

export default Menu