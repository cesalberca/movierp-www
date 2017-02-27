import React from 'react';

import './../../stylesheets/seat.css'

class BuyTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seats: 250
    }

    this.renderSeats= this.renderSeats.bind(this);
  }

  renderSeats() {
    const rows = this.state.seats * 0.05;
    const columns = this.state.seats / rows;
    let seats = [];
    let counter = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const isOccupied = i % 2 === 0 ? 'seat--occupied' : 'seat--free';
        seats.push(<span className={`seat ${isOccupied}`} key={counter}>&emsp;</span>);
        counter++;
      }
      seats.push(<br key={counter}/>);
      counter++;
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
