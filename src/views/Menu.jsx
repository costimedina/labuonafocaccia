import { React, useContext } from 'react';
import { Container } from 'react-bootstrap';
import Grid from '../components/Grid';
import Context from '../context/Context';

const Menu = () => {

  const { clasicas, modernas, postmodernas } = useContext(Context);
// console.log(postmodernas)
  return (
    <Container className='mainCont p-0'>
      <Grid />
      {/* <section>
        <h2 className="mainCont__title">CLASICAS</h2>
        <Grid data={clasicas}/>
      </section>
      <section>
        <h2 className="mainCont__title">MODERNAS</h2>
        <Grid data={modernas}/>
      </section>
    
      <section>
        <h2 className="mainCont__title">POST MODERNISMOS</h2>
        <Grid data={postmodernas}/>
      </section> */}
    
        
         

   
    </Container>
  )
}

export default Menu