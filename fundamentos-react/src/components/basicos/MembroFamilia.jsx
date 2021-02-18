import React from'react'
export default props =>{
    const nome  = props.nome;
    return(
       <div>
           {nome} <strong>{props.sobrenome}</strong>
       </div>
    );
}