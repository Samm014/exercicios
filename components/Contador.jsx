import { Component } from "react/cjs/react.development";

export default class Contador extends Component{

    
    state = {
        number: this.props.InitialValue ?? 0,
        passo: this.props.passo ?? 1,
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.passo,
        })
    }

    alterarPasso = (e)=>{
        this.setState({passo: +e.target.value});    
    }

    renderForm(){
        return(
            <>
                <input type="number" name="" id="" min={1} max={100} value={this.state.passo} onChange={this.alterarPasso}/>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        )
    }

    render(){
        return(
            <div>
                <h2>Contador (baseado em classe)</h2>
                <h3>{this.state.number}</h3>
                {this.renderForm()}
            </div>
        )
    }

}