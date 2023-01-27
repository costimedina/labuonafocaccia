import { createContext } from 'react';
import { React, useState, useEffect } from 'react';

//CREATE CONTEXT
const Context = createContext({});

//PROVIDE CONTEXT
const ContextProvider = ({ children }) => {

    const [ products, setProducts ] = useState([]);

//Async function to get the info
const getProducts = async() => {
    const res = await fetch('./products.json');
    const data = await res.json();
    setProducts(data)
}

useEffect(()=>{
    getProducts();
}, [])


  return (
    //Pass the variables and functions through the ContextProvider as values
    <Context.Provider value={{products, setProducts}}>
        {children}
    </Context.Provider>
  )
}
export {ContextProvider};
export default Context;