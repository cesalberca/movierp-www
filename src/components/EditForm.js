import React from 'react';
import swal from 'sweetalert';

import { update, getColumnData } from './../utils/apiHelper';
import FormItem from './FormItem';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableColumns: [],
      formItemsValues: this.props.data
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.loadFormItems = this.loadFormItems.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
  }

  componentDidMount() {
    this.loadFormItems();
  }

  handleOnChange(e) {
    let changedValues = {};
    changedValues[e.target.name] = e.target.value;
    const updatedItems = Object.assign(this.state.formItemsValues, changedValues);
    this.setState({formItemsValues: updatedItems});
  }

  loadFormItems() {
    getColumnData(this.props.targetTable)
    .then((response) => {
      this.setState({tableColumns: response});
    })
    .catch((error) => {
      swal({title: 'Error al conseguir los campos de la base de datos', type: 'error'})
    });
  }

  updateEntry() {
    update(this.props.targetTable, this.props.data._links.self.href, this.state.formItemsValues)
    .then(() => {
      swal({title: 'Entrada actualizada', type: 'success'});
      this.props.onSubmit();
    })
    .catch((error) => {
      swal({title: 'Error al actualizar la entrada. Revisa los campos', type: 'error'});
    });
  }

  render() {
    // We need to pass down the initial value to the form items
    const formItemsList = this.state.tableColumns.map((column, index) => {
      return(
        <FormItem 
          label={column.name}
          key={index}
          onChangeEvent={this.handleOnChange}
          inputName={column.name}
          value={this.state.formItemsValues[column.name]}
          inputType="text"/>
      );
    });

    const { title, actionButtonText } = this.props;
    return(
      <div className="FormContainer">
        <h1 className="FormContainer__Title">{title}</h1>
        <form className="FormContainer__Form">
          {formItemsList}
          <div className="FormContainer__container__actionButton">
            <input type="button" onClick={this.updateEntry} className="FormContainer__actionButton btn btn--primary" value={actionButtonText}/>
          </div>
        </form>
      </div>
    );
  }
}

export default EditForm;
