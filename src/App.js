import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoes: []
    }
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/shoes/")
      .then((res) => res.json())
      .then(data => this.setState({shoes:data.results}));
  }
  render() {
    return (
      <div className="App">
        <h1>Cheria's Shoe Store</h1>
        {this.state.shoes.map((shoe, id) => (
          <div key={id}>
            <ul>
              <li>Size: {shoe.size}</li>
              <li>Brand Name: {shoe.brand_name}</li>
              <li>Manufacturer: {shoe.manufacturer}</li>
              <li>Color: {shoe.color}</li>
              <li>Material: {shoe.material}</li>
              <li>Type: {shoe.shoe_type}</li>
              <li>Fasten Type: {shoe.fasten_type}</li>
            </ul>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
