import React, {Component} from 'react';

export default class Salve extends Component{

    state = {
        cont : this.props.cont,
        palavra: this.props.palavra
    }

    render(){
        const {cont, palavra} = this.state
        return(
            <div>
                <h1>{palavra}: Quantidades de salves realizados {cont}</h1>
                <h3>Vamos contar</h3>
                <hr />
                <input type="number" name="vamo la" onChange={e=>this.setCont(e)} />
            </div>
        ) 
    }
    
    setCont(e){
        this.setState({cont: e.target.value})
    }
}

