import React,{Component} from 'react';
import './Todo.css'


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
    event.preventDefault()
    const {input} = this.state
    const allitmes = this.state.itemsarray
    allitmes.push(input)
    this.setState({
      itemsarray:allitmes,
      input:''
    })

  }

  render() {
    const { input, itemsarray } = this.state;
    console.log(itemsarray);
    return (
      <div className='MainContainer'>
        <h1>KANBAN BOARD</h1>
        <div className='SecondMain'>
          <div className='First'>
            <h3>ADD ITEMS</h3>
            <form onSubmit={this.storeItems}>
              
              <input 
                type="text" 
                className="border-none px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white-500 mt-5 bg-none" 
                placeholder="Enter your text" 
                value={input} 
                onChange={this.handleChange}
              />
            </form>
          </div>
          <div className='Second'>
            <h3 id='h3s'>ITEM LIST</h3>
            <ul>
              {itemsarray.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}  

export default App;
