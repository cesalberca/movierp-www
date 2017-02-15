import React from 'react';
import swal from 'sweetalert';

import { insert, getColumnData } from './../utils/apiHelper';
import FormItem from './FormItem';

class FormContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tableColumns: [],
      formItemsValues: {}
    };

    this.loadFormItems = this.loadFormItems.bind(this);
    this.insertNewEntry = this.insertNewEntry.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.loadFormItems();
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

  handleOnChange(e) {
    let changedValues = {};
    changedValues[e.target.name] = e.target.value;
    const updatedItems = Object.assign(this.state.formItemsValues, changedValues);
    this.setState({formItemsValues: updatedItems})
  }

  insertNewEntry() {
    insert(this.props.targetTable, this.state.formItemsValues)
    .then(() => {
      swal({title: 'Entrada creada', type: 'success'});
      this.props.onSubmit();
    })
    .catch(error => {
      swal({title: 'Error al crear entrada. Revisa los campos', type: 'error'});
    });
  }

  render() {
    const formItemsList = this.state.tableColumns.map((column, index) => {
      return(
        <FormItem 
          label={column.name}
          onChangeEvent={this.handleOnChange}
          key={index}
          value={this.state.formItemsValues[column.name]}
          inputName={column.name}
          inputType="text"/>
      );
    });

    const { title, actionButtonText } = this.props;
    return (
      <div className="FormContainer">
        <h1 className="FormContainer__Title">{title}</h1>
        <form className="FormContainer__Form">
          {formItemsList}
          <div className="FormContainer__container__actionButton">
            <input type="button" onClick={this.insertNewEntry} className="FormContainer__actionButton btn btn--primary" value={actionButtonText}/>
          </div>
        </form>
      </div>
    );
  }
}

export default FormContainer;
