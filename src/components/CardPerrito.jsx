import React from "react";

class CardPerrito extends React.Component {
    render() {
        return (
            <div>
                <img src="https://via.placeholder.com/80" alt={this.props.breed} />
                <div>
                    <h2>{this.props.breed}</h2>
                    <small>{this.props.size}</small>
                </div>
            </div>
        )
    }
}

export default CardPerrito;