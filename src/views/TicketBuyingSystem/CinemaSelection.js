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
    this.changeViewToFilmSelection = this.changeViewToFilmSelection.bind(this);
  }

  componentDidMount() {
    this.loadCinemas();
  }

  loadCinemas() {
    selectAll('cinemas')
    .then((response) => {
      //console.log(response);
      this.setState({cinemaList: response});
    });
  }

  changeViewToFilmSelection(selectedCinemaId){
    //Aqui cambiamos de view a filmSelection y le pasamos la selectedCinemaId
    // browserHistory.replace('/filmSelection', {selectedCinemaId});
  }

  render() {
    /*const cinemaSelectionItems = this.state.cinemaList.map((item, index) => {
      return(<CinemaSelectionItem key={index}
      cinemaSelectionItemName={item.nombre}
      cinemaSelectionItemAddress={item.direccion}
      cinemaSelectionItemOnClickEvent={this.changeViewToFilmSelection}
      cinemaSelectionId={getSelfId(item)}/>);
    });*/

    const test = <Link to="/cinemaSelection/44">Test</Link>

    return (
      <div>
        {/*{cinemaSelectionItems}*/}
        {test}
      </div>
    );
  }
}

export default CinemaSelection;
