import React from "react";

export default props =>{
return <React.Fragment>
            <h1>Bom dia, {props.nome}!</h1>
            <h2>Usando mais de um elemento</h2>
            <p>Para isso eu uso o React.Fragment</p>
        </React.Fragment>
    
}

/* export default props =>{
    return [<h1 key='h1'>Bom dia, {props.nome}!</h1>, <h2>Usando mais de um elemento</h2>, <p>Para isso eu uso o React.Fragment</p>]
        
    } */