import { createContext } from 'react';
import { React, useState, useEffect } from 'react';

//CREATE CONTEXT
const Context = createContext({});

//PROVIDE CONTEXT
const ContextProvider = ({ children }) => {

    const [ clasicas, setClasicas ] = useState([]);
    const [ modernas, setModernas ] = useState([]);
    const [ postmodernas, setPostmodernas ] = useState([]);

//Async function to get the info of Clasicas -------------------------------------------------------------
const getClasicas = async() => {
    const res = await fetch('http://localhost:3000/products.json');
    const data = await res.json();
    setClasicas(data.clasicas);
}
useEffect(()=>{
    getClasicas();
}, []);



//Async function to get the info of Modernas -------------------------------------------------------------
const getModernas = async() => {
    const res = await fetch('http://localhost:3000/products.json');
    const data = await res.json();
    setModernas(data.modernas);
}

useEffect(()=>{
    getModernas();
}, []);


//Async function to get the info of Postmodernas -------------------------------------------------------------
const getPostmodernas = async() => {
    const res = await fetch('http://localhost:3000/products.json');
    const data = await res.json();
    setPostmodernas(data.postmodernismos);
}

useEffect(()=>{
    getPostmodernas();
}, []);

console.log(postmodernas);


  return (
    //Pass the variables and functions through the ContextProvider as values
    <Context.Provider value={{clasicas, setClasicas, modernas, setModernas, postmodernas, setPostmodernas}}>
        {children}
    </Context.Provider>
  )
}
export {ContextProvider};
export default Context;