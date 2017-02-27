import React from 'react';

import './../../stylesheets/seat.css';

class BuyTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seats: 20
    }

    this.renderSeats= this.renderSeats.bind(this);
  }

  renderSeats() {
    let seats = [];
    for (let i = 0; i < this.state.seats / 2; i++) {
      for (let j = 0; j < this.state.seats / 2; j++) {
        seats.push(<span className="seat ${i % 2 === 0 ? 'seat--ocuppied' : 'seat--free'}" key={"" + i + j}>{i}{j}</span>);
      }
      seats.push(<br/>);
    }
    return seats;
  }

  render() {
    return (
      <div>
        <h1>Hola</h1>
        {this.renderSeats()}
      </div>
    );
  }
}

export default BuyTicket;
