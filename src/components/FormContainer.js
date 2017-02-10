import React from 'react';

import { insert } from './../utils/apiHelper';
import FormItem from './FormItem';

import './FormContainer.css'

class FormContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: this.props.title,
      tableColumns: [],
      formItems: [],
      formItemsValues: {},
      actionButtonText: this.props.actionButtonText
    };

    this.loadFormItems = this.loadFormItems.bind(this);
    this.insertNewEntry = this.insertNewEntry.bind(this);
    this.formItemsOnChange = this.formItemsOnChange.bind(this);
  }

  componentDidMount() {
    this.loadFormItems();
  }

  loadFormItems() {
    fetch('http://localhost:8080/api/profile/' + this.props.targetTable, {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const tableColumns = json.alps.descriptors[0].descriptors;
      this.setState({tableColumns})
    })
    .catch((error) => {
    });
  }

  formItemsOnChange(e) {
    let changedValues = {};
    changedValues[e.target.name] = e.target.value;
    const updatedItems = Object.assign(this.state.formItemsValues, changedValues);
  }

  insertNewEntry() {
    const body = this.state.formItemsValues;

    insert(this.props.targetTable, body)
    .then(response => console.log(response))
    .catch(error => console.log(error));
    // fetch('http://localhost:8080/api/' + this.props.targetTable, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(
    //     body
    //   )
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((json) => {
    //   console.log(json);
    // })
    // .catch((error) => {
    // });
  }

  render() {
    this.state.formItems = this.state.tableColumns.map((column, index) => {
      return(
        <FormItem label={column.name} onChangeEvent={this.formItemsOnChange} key={index} inputName={column.name} inputType="text"/>
      );
    })

    return (
      <div className="FormContainer">
        <div className="FormContainer__container">
          <h1 className="FormContainer__Title">{this.state.title}</h1>
          <form className="FormContainer__Form">
            {this.state.formItems}
            <div className="FormContainer__container__actionButton">
              <input onClick={this.insertNewEntry} className="FormContainer__actionButton btn btn--primary" type="button" value={this.state.actionButtonText} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormContainer;
