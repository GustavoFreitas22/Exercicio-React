import React from 'react';
import Filho from './Filho';
import daledale from 'daledale'

export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <Filho nome='Predu' sobrenome={props.sobrenome}/>
    <Filho {...props}/> {/* Passando todos os atributos para o filho */}
    <Filho {...props} nome='Karla'/>
</div>