// IMPORT EXPORT SECTION
import React, {Component} from "react";

// VARIALE DECLARATIONS
const Header = (props) => <h1>{props.title}</h1>;
const InventoryItem = (props) => (
  <div className="InventoryItem">
    <strong>{props.itemName}</strong> 
    <hr /> 
    <p>{props.itemPrice}</p>
  </div>
);
// <hr/> basically <br/> tapi pake horizontal line!!!

// PROCESS
class App extends Component { // App = child, Component = Parent
  constructor(props){
    super(props);

    this.state = {
      items: [
        { itemName: "Shoe", itemPrice: 5 },
        { itemName: "Sock", itemPrice: 3 }
      ]
    };
  }
  
  render() {
    return (
      <div className="App">
        <Header title="BuyStuff" />
        <InventoryItem
          itemName={this.state.items[0].itemName}
          itemPrice={this.state.items[0].itemPrice}
        />
        <InventoryItem
          itemName={this.state.items[1].itemName}
          itemPrice={this.state.items[1].itemPrice} />
        </div>
    );
  }
}
export default App;