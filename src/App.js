import React from 'react'
import Test from './test'

export default class App extends React.Component {
    constructor()
    {
        super();
        this.state={name:"aarya"}
    }
    upset(){
        this.setState({name:"aditi"})
    }
    render(){
        return(
            <>
            <h1>
                HELLO    hi  {this.state.name}
            </h1>
            <button onClick={()=>{this.upset()}}>update</button>
            </>
        )
    }

}