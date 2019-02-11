import React, { Component } from 'react';

class App extends Component{
//App component is first initialized
      constructor() {
        var age = Number(window.prompt("Please enter age :"));
        super();
//initialize App component state
        this.state = {
          age: age
        };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
      }
      onIncrement(){
//setState() method allows components to update their own state
//increments the age by 1 year the count of the state
        this.setState((prevState)=>({
          age: prevState.age + 1,
        }));
      }
//decrements the age by 1 year the count of the state
      onDecrement(){
        this.setState((prevState)=>({
          age: prevState.age - 1,
        }));
      }
//App component is rendered
      render(){
        const {age} = this.state;
        return(
//onClick event in React
          <div>
            <h2>Age : {age}</h2>
            <button type="button" onClick={this.onIncrement}>Increment</button> <button type="button" onClick={this.onDecrement}>Decrement</button>
            </div>
        );
      }
    }
//myIncrement() and myDecrement are exported to unit tests
//myIncrement() is tested with an input and text asserts an expected output
//myIncrement is used to update the local state of the React component can tested in isolation from the component now
   export const myIncrement = (prevState)=>({
      age: prevState.age + 1,
    })
//myDecrement() is tested with an input and text asserts an expected output
//myDecrement is used to update the local state of the React component can be tested in isolation from the component now
    export const myDecrement = (prevState)=>({
      age: prevState.age - 1,
    })
    export const Age = ({age}) => <p>{age}</p>;
    export default App;