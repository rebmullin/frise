import React from "react";
import LazyLoad from "react-lazyload";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import "./App.css";

const midBp = "700px";

class App extends React.Component {
  state = {
    dogs: [],
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/frise/images")
      .then(res => res.json())
      .then(res => {
        this.setState({
          dogs: res.message,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { dogs } = this.state;
    return (
      <div className="dogs-wrapper">
        {dogs.length > 0 ? (
          <div
            className="dogs"
            css={css`
              background-color: red;
              @media (min-width: ${midBp}) {
                background-color: blue;
              }
            `}
          >
            <h1 className="dogs-title">Awhh!</h1>
            <div className="dogs">
              {dogs.map(dog => {
                return (
                  <LazyLoad debounce height={100} offset={-100} key={dog} once>
                    <div className="dog">
                      <img className="dog-image" src={dog} alt="dog" />
                    </div>
                  </LazyLoad>
                );
              })}
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
