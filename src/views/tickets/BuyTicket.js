import React from 'react';

import { selectAll, getSelfId, selectWithFilter } from './../../utils/apiHelper';

import './../../stylesheets/seat.css';

class BuyTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seats: 200,
      availableSeats: 0,
      selectedSeats : 0
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.renderSeats= this.renderSeats.bind(this);
  }

  componentDidMount() {
    selectWithFilter('CinemaRoom', ``, 'numeroButacas')
    .then(result => {
      this.setState({seats: result});
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // `/tickets/${this.props.param.cinemaId}/${this.props.param.filmId}/${this.props.param.sessionId}/buy`
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

        <div className="seating">
          {this.renderSeats()}
        </div>

        <form className="FormContainer" onSubmit={this.onSubmit}>
          <h1 className="FormContainer__Title">Compra de entradas</h1>
          <div className="FormItem">
            <label htmlFor="numberOfSeats">Número de butacas a comprar</label>
            <input className="FormItem__input" name="numberOfSeats" type="number" min="0" max={this.state.seats}/>
          </div>

          <div className="FormContainer__actionButton">
            <input className="btn btn--primary" type="submit" value="Comprar"/>
          </div>
        </form>
      </div>
    );
  }
}

export default BuyTicket;
