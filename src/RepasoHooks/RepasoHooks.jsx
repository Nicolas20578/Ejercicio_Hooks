import React, { useState } from 'react'

export const RepasoHooks = () => {

    // 1. Hook: useState
    // 2. const [] = useState();
    const [valorInicial, setValorInicial] = useState(0);

    const [mensaje, setMensaje] = useState("nombre");

    const [change, setChange] = useState("Enable");


    const sumar =()=>{
        setValorInicial(valorInicial +1)
    }

    const colocarMensajeNuevo =(event) =>{
        setMensaje(event.target.value);
    }

    const handleClick = () =>{
        setChange(!change);
    };

    const h1Style = {
        color:change ? 'cyan' : 'lime', cursor:'pointer',
    }
  return (
    <>
        <h1 style={h1Style}>{`Clicks:  ${valorInicial}`}</h1>
        <input onChange ={colocarMensajeNuevo} type="text" />
        <h2>{mensaje}</h2>
        <button onClick={sumar}>Click</button>
        <button onClick={handleClick}>{change ? 'Enable':'Disable'}</button>
    </>
  )
}
