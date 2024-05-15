import React,{Component} from 'react';
import './Todo.css'
import { useState } from 'react';


class App extends Component{
  state = {
    input: '',
    itemsarray:[]
  }

  handleChange = event =>{
    
    this.setState({
      input:event.target.value
    })
  }

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    if (input.trim() !== '') { 
      const allItems = [...this.state.itemsarray]; 
      allItems.push(input);
      this.setState({
        itemsarray: allItems,
        input: ''
      });
    }
  }
  

  deleteitem=(key)=>{
    const allitmess = this.state.itemsarray
    allitmess.splice(key,1)
    this.setState({
      itemsarray:allitmess
    })
  }

  render() {
    const { input, itemsarray } = this.state;

    return (
      <div className='MainContainer'>
        <h1>TODO APP</h1>
        <div className='SecondMain'>
          <div className='First'>
            <h3>ADD ITEMS</h3>
            <form onSubmit={this.storeItems}>
              
              <input 
                type="text" 
                className=" px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white-500 mt-5 bg-none" 
                placeholder="Enter Items..." 
                value={input} 
                onChange={this.handleChange}
              />
            </form>
          </div>
          <div className='Second'>
            <h3 id='h3s'>ITEM LIST</h3>
            <ul>
              {itemsarray.map((data, index) => (
                <li key={index}>{data}<button className='spantag' onClick={()=>this.deleteitem(index)}>Delete</button></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}  

export default App;
