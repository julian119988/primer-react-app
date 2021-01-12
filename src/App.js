import "./App.css";
import React, { Component } from "react";

const colorRojo = { backgroundColor: "red", fontSize: "3rem" };
const colorAzul = { backgroundColor: "blue", fontSize: "0.5rem" };

class App extends Component {
  state = {
    estado: true,
    estilo: colorRojo,
  };
  cambiarEstilo = (e) => {
    if (this.state.estado) {
      this.setState({ estado: false });
      this.setState({ estilo: colorAzul });
      console.log(this.state.estado, this.state.estilo);
    } else {
      this.setState({ estado: true });
      this.setState({ estilo: colorRojo });
      console.log(this.state.estado, this.state.estilo);
    }
  };
  render() {
    return (
      <div style={this.state.estilo}>
        <h1>Hola mundo!</h1>
        <button onClick={this.cambiarEstilo}>Cambiar fondo</button>
      </div>
    );
  }
}

export default App;
