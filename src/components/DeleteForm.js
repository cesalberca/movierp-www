import React from 'react';

import FormItem from './FormItem';

class DeleteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ''
    }

    this.deleteEntry = this.deleteEntry.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    let changedValues = {};
    changedValues[e.target.name] = e.target.value;
    const updatedItems = Object.assign(this.state.formItemsValues, changedValues);
    this.setState({formItemsValues: updatedItems})
  }

  deleteEntry() {

  }

  render() {
    return(
      <form className="FormContainer">
        <h1 className="FormContainer__Title">{this.props.title}</h1>
        <div className="FormContainer__container__actionButton">
          <FormItem label="Id" inputName="id" inputType="text" onChangeEvent={this.handleOnChange}/>
          <input onClick={this.deleteEntry} className="FormContainer__actionButton btn btn--primary" type="button" value={this.props.actionButtonText} />
        </div>
      </form>
    );
  }
}

export default DeleteForm;
