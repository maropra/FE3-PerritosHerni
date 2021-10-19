import './App.css';
import React from "react";
import Botonera from "./components/Botonera.jsx";
import CardPerrito from "./components/CardPerrito.jsx";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtro: "Todos"
    }
  }

  handleClick = (btnElegido) => {
    this.setState({
      filtro: btnElegido
    })
  }

  render() {
    //FORMA CON IF NORMAL
    // let componentesPerrito = [];

    // if (this.state.filter === "Todos") {
    //   componentesPerrito = data.map((perro, index) => {
    //     return <CardPerrito key={index + "-" + perro.breed} breed={perro.breed} size={perro.size} />
    //   })
    // } else {
    //   componentesPerrito = data.filter(perro => this.state.filter === perro.size)
    //     .map((perro, index) => <CardPerrito key={index + "-" + perro.breed} breed={perro.breed} size={perro.size} />)
    // }

    return (
      <div className="App">
        <h1>Hola mundo</h1>
        {/* {componentesPerrito} */}

        {
          this.state.filtro === "Todos" ?
            data.map((perro, index) => <CardPerrito key={index + "-" + perro.breed} breed={perro.breed} size={perro.size} />) :
            data.filter(perro => perro.size == this.state.filtro)
              .map((perro, index) => <CardPerrito key={index + "-" + perro.breed} breed={perro.breed} size={perro.size} />)
        }


        <Botonera handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
