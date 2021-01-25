import "./App.css";
import React, { Component } from "react";

let divStyle = {
  flexDirection: "row",
  textAlign: "center",
  justifyContent: "space-evenly",
};

class App extends Component {
  state = {
    color: { backgroundColor: "red" },
  };

  cambiarEstilo = (e) => {
    if (this.state.color.backgroundColor === "red") {
      this.setState({ color: { backgroundColor: "blue" } });
    } else {
      this.setState({ color: { backgroundColor: "red" } });
    }
  };
  render() {
    return (
      <div>
        <div style={(divStyle, this.state.color)}>
          <div className="divFlex">
            {" "}
            <h1>Hola mundo!</h1>
          </div>
          <div className="divFlex">
            {" "}
            <h1>Hola mundo2</h1>
          </div>
          <div className="divFlex">
            {" "}
            <h1>Hola mundo3</h1>
          </div>
        </div>

        <button onClick={this.cambiarEstilo}>Cambiar fondo</button>
      </div>
    );
  }
}

export default App;
