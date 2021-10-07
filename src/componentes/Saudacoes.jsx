import React,{Component} from 'react';


export default class Saudacoes extends Component{

    state={
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props){
        super(props) // preciso para passar as informações para super classe

        this.setTipo = this.setTipo.bind(this)
        // está chumbando o valor de this
    }
    
    setTipo(e){
        this.setState({tipo: e.target.value})
    }
    setNome(e){
        this.setState({nome: e.target.value})
    }

    render(){
        const {tipo, nome} = this.state
        return (
            <div>
                <h1> {tipo}, {nome}!</h1>
                <hr />
                <input type="text" placeholder='Digita ai meu rei' value={tipo} onChange={
                    e=> this.setTipo(e)
                } />
                <input type="text" placeholder='Digita teu nome na moral' value={nome} onChange={e=> this.setNome(e)} />
            </div>
        )
    }

}