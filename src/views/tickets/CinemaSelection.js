import React from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import CinemaSelectionItem from './../../components/CinemaSelectionItem';

import { selectAll, getSelfId } from './../../utils/apiHelper';

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
      (<CinemaSelectionItem key={index}
      name={item.nombre}
      address={item.direccion}
      id={getSelfId(item)}/>)
    );

    return (
      <div>
        {cinemaSelectionItems}
      </div>
    );
  }
}

export default CinemaSelection;
