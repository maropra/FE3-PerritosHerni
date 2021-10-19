import React from "react";

class Botonera extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.handleClick("Pequeños")} >Pequeños</button>
                <button onClick={() => this.props.handleClick("Medianos")} >Medianos</button>
                <button onClick={() => this.props.handleClick("Grandes")} >Grandes</button>
                <button onClick={() => this.props.handleClick("Todos")} >Todos</button>
            </div>
        )
    }
}

export default Botonera;