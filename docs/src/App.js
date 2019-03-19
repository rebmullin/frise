import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    dogs: [],
    error: "",
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/frise/images")
      .then(res => res.json())
      .then(res => {
        this.setState({
          dogs: res.message,
        });

        // if (res.status === 'error') {
        //   this.setStatus({
        //     error: res.message
        //   })
        // }
      })
      .catch(err => {
        console.log(err);
        console.log("REBB err", err);
        // this.setState({
        //   error: res.status
        // })
      });
  }
  render() {
    const { dogs } = this.state;
    // console.log("REBB dog", this.state.dogs);
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
