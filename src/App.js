import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./Components/Header/Header";
// import Inventory from "./Components/Inventory/Inventory";
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      cart: []
    }
  }
  componentDidMount(){
    axios.get('/api/getInventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    const mappedInventory = this.state.inventory.map(item => {
      return <div key={item.id}>
        <h1>{item.name}</h1>
        <br/>
        <span>{item.price}</span>
        <br/>
        <img className="product-img"alt='product-img' src={item.imgUrl}/>
        <br/>
        <button>Add To Cart</button>
      </div>
    })
    return (
      <div className="App">
        <Header />
        {mappedInventory}

      </div>
    );
  }
}

export default App;
