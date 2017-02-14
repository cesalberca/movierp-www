import React from 'react';
import swal from 'sweetalert';

import { deleteOne } from './../utils/apiHelper';

import FormItem from './FormItem';

class DeleteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ''
    };

    this.delete = this.delete.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({id:  e.target.value});
  }

  delete() {
    deleteOne(this.props.targetTable, this.state.id)
    .then(() => {
      swal({
        title: 'Entrada borrada con éxito',
        type: 'success'
      });
    })
    .catch(() => {
      swal({
        title: 'Entrada con ese id no existe',
        type: 'error'
      });
    });
  }

  render() {
    return(
      <form className="FormContainer">
        <h1 className="FormContainer__Title">{this.props.title}</h1>
        <FormItem label="Id" inputName="id" inputType="text" onChangeEvent={this.handleOnChange}/>
        <div className="FormContainer__container__actionButton">
          <input onClick={this.delete} className="FormContainer__actionButton btn btn--primary" type="button" value={this.props.actionButtonText} />
        </div>
      </form>
    );
  }
}

export default DeleteForm;
