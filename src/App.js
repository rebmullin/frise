import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    dogs: []
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/frise/images")
      .then(res => res.json())
      .then(res => {
        this.setState({
          dogs: res.message
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { dogs } = this.state;
    return dogs.length > 0 ? (
      <div className="App">
        <h1>Awhh</h1>
        <div className="dogs">
          {dogs.map(dog => {
            return (
              <div className="dog" key={dog}>
                <img src={dog} alt="dog" />
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default App;
