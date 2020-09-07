
import React, {Component, useLayoutEffect} from 'react';
import Form_3 from './Form_3'

class Form_3_1 extends Component {
    constructor(props){
        super(props)
         this.state = {
             Name: '',
             age:null,
             phoneNumber:null,
             occupation:'',
             showData:false,
            }           
        this.list=[]
    }
    appendList (elem) {
        this.list=[...this.list,elem]
        return (this.list)    
    } 

    displayNameHandler = (e) => {
        let updatedName = e.target.value;
        this.setState({Name: updatedName});
        //console.log(updatedName);  
    }
    handleChange2 =(e) => {
        let updatedAge =e.target.value;
        this.setState({age:updatedAge});
    }
    handleChange3 =(e)=>{
        let updatedPhone= e.target.value;
        this.setState({phoneNumber:updatedPhone})

    }
    handleChange4 = (e) => {
        let updatedOccupation=e.target.value;
        this.setState({occupation:updatedOccupation})

    }
    handleClick =() => {
        let elem = {}
        elem.Name = this.state.Name[0].toUpperCase() + (this.state.Name).substring(1,this.state.Name.length)
        elem.age = this.state.age;
        elem.phoneNumber = this.state.phoneNumber;
        elem.occupation = this.state.occupation;
       
        this.appendList(elem);      
        console.log(this.list)
    }
    showRecord = () => {
        this.setState({
            showData:true
        })           
    }

    renderTabularData(){
        return this.list.map((employee,index) => {
            const {Name, age, phoneNumber,occupation} = employee;
            return(
                <tr key={Name}>
                    <td>{Name}</td>
                    <td>{age}</td>
                    <td>{phoneNumber}</td>
                    <td>{occupation}</td>
                </tr>
            )
        })
    }

    render() {        
        return( 
            <div>
                <form>
                    <label>Enter the Name</label>
                    <input type="text"  onChange={this.displayNameHandler}/><br></br>
                    <label >AGE:</label><br></br>
                    <input type="number" onChange={this.handleChange2} ></input><br></br>
                    <label>PHONE NUMBER:</label><br></br>
                    <input type="number" onChange={this.handleChange3}></input><br></br>
                    <label >OCCUPATION:</label><br></br>
                    <input type="text" onChange={this.handleChange4}></input><br></br>
                    {/*<button type="button" onClick={this.handleClick }> Submit </button> */} 
                    <button type="button" onClick={this.showRecord }> ShowRecord </button>   
                </form>
                <Form_3 state={this.state} click={this.handleClick} newList={this.list}></Form_3>
                {/*<h2 id='title'>Employee List</h2>
                <table id='Employees'>
                    <tbody>
                        {(this.state.showData)&&this.renderTabularData()}
                    </tbody>
                </table>*/}
                {(this.state.showData)&&this.list.map((i,index)=><ul key={index}><li key = {index}>{i.Name},{i.age},{i.phoneNumber},{i.occupation}</li><hr></hr></ul>)}
                {/*{(this.state.showData)&&((this.list.map((i,index)=><ul key={index}><li key = {index}>{i.Name},{i.age},{i.phoneNumber},{i.occupation}</li><hr></hr></ul>))[this.list.length -1])}*/}
                
                
            </div>
            
        );
    }
}
export default Form_3_1;