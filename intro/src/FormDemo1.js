import React, {Component} from "react";

export default class FormDemo1 extends Component{
    state ={userName:'', city:''}
    onChanegeHandler=(event)=>{
        this.setState({userName:event.target.value})
        let name = event.target.name;
        let value=event.target.value;

        this.setState({[name]:value})

    }
    onSubmitHandler=(event)=>{
        event.preventDefault();
        alert(this.state.userName);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input name="userName" onChanege={this.onChanegeHandler} type="text"></input>
                    <h3>User Name is {this.state.userName}</h3>
                   

                    <h3>City</h3>
                    <input name="city" onChanege={this.onChanegeHandler} type="text"></input>
                    <h3>City is {this.state.city}</h3>

                    <input type="submit" value="Svae"></input>

                    
                </form>
            </div>
        )
    }
}