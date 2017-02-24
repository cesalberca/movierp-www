import React from 'react';

import SessionSelectionItem from './../../components/SessionSelectionItem';

import { selectAll, getSelfId, selectWithFilter } from './../../utils/apiHelper';

class SessionSelection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      sesionList: []
    };

    this.loadSessions = this.loadSessions.bind(this);
  }

  componentDidMount() {
    console.log(this.props.params);
    this.loadSessions();
  }

  loadSessions() {
    selectWithFilter('cinemas', `findSessionsByCinemaIdAndByMovieId?idCine=${this.props.params.cinemaSelectionId}&idPelicula=${this.props.params.movieSelectionId}`, 'sessions')
    //findSessionsByCinemaIdAndByMovieId?idCine=21&idPelicula=3
    .then((response) => {
      
      this.setState({sesionList: response});
      console.log("sesionList:")
      console.log(this.state.sesionList);
    });
  }

  render(){
    const sesionSelectionItems = this.state.sesionList.map((item, index) =>
      (
        <SessionSelectionItem
          key={index}
          date={item.fechaComienzo}
        />
      )
    );
    return(
      <div>
        {sesionSelectionItems}
      </div>
    );
  }

};

export default SessionSelection;