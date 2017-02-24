import React from 'react';

import { selectAll, getSelfId } from './../../utils/apiHelper';

import CinemaSelectionItem from './../../components/CinemaSelectionItem';

import './CinemaSelection.css';

class CinemaSelection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cinemaList: []
    };

    this.loadCinemas = this.loadCinemas.bind(this);
  }

  componentDidMount() {
    this.loadCinemas();
  }

  loadCinemas() {
    selectAll('cinemas')
    .then((response) => {
      this.setState({cinemaList: response});
    });
  }

  render() {
    const cinemaSelectionItems = this.state.cinemaList.map((item, index) =>
      <CinemaSelectionItem
        key={index}
        name={item.nombre}
        address={item.direccion}
        id={getSelfId(item)}/>
    );

    return (
      <div>
        <div className="CinemaSelection">
          {cinemaSelectionItems}
        </div>
      </div>
    );
  }
}

export default CinemaSelection;
