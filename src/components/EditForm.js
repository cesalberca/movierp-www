import React from 'react';
import swal from 'sweetalert';

import { update, getColumnData, getSelf, getSelfId, getId, deleteOne } from './../utils/apiHelper';
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
    this.deleteEntry = this.deleteEntry.bind(this);
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
    const self = getSelf(this.props.data);
    update(this.props.targetTable, self, this.state.formItemsValues)
    .then(() => {
      swal({title: 'Entrada actualizada', type: 'success'});
      this.props.onSubmit();
    })
    .catch((error) => {
      swal({title: 'Error al actualizar la entrada. Revisa los campos', type: 'error'});
    });
  }

  deleteEntry() {
    //const selfId = getSelfId(this.props.data);
    console.log("Selft")
    console.log(getId(getSelf(this.props.data)));
    console.log("target able")
    console.log(this.props.targetTable);
    deleteOne(this.props.targetTable, getId(getSelf(this.props.data)))
    .then(() => {
      //this.loadFormItems();
      this.props.onSubmit();
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
            <input type="button" onClick={this.deleteEntry} className="FormContainer__actionButton btn btn--dark" value="Eliminar"/>
            <input type="button" onClick={this.updateEntry} className="FormContainer__actionButton btn btn--primary" value={actionButtonText}/>
          </div>
        </form>
      </div>
    );
  }
}

export default EditForm;
