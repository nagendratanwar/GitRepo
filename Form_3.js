import React, { Component } from 'react'
class Form_3 extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <button type ="submit" onClick={this.props.click}>submit</button>
            </div>
            
        )
    }
}




export default Form_3;
