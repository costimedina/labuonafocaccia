import { React, useContext } from 'react';
import ProductCard from './ProductCard';
import Context from '../context/Context';



const Grid = () => {
  
  const { clasicas, modernas, postmodernas } = useContext(Context);

  return (
    <div>
      <section>
        <h2 className="mainCont__title">CLÁSICAS</h2>
          <div className="myGrid">
                {clasicas.map((data, i)=>(
                  <ProductCard key={i} product={data}/>
                ))}
          </div>
      </section>

      <section className="mt-5">
        <h2 className="mainCont__title">MODERNAS</h2>
          <div className="myGrid">
                {modernas.map((data, i)=>(
                  <ProductCard key={i} product={data}/>
                ))}
          </div>
      </section>

      <section className="mt-5">
        <h2 className="mainCont__title">POST MODERNISMOS</h2>
          <div className="myGrid">
                {postmodernas.map((data, i)=>(
                  <ProductCard key={i} product={data}/>
                ))}
          </div>
      </section>

    </div>





  );
}

export default Grid;