import React from 'react';

import FormItem from './FormItem';
import './../stylesheets/formContainer.css'

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
            //console.log("Columnas de tabla cargadas:");
            //console.log(json.alps.descriptors[0].descriptors);
            const tableColumns = json.alps.descriptors[0].descriptors;
            this.setState({tableColumns})

            //console.log("FormItems cargados:")
            //console.log(this.state.formItems);
        })
        .catch((error) => {
            console.log("error de form container", error);
            alert('Error al conseguir datos del servidor');
        });
    }

    formItemsOnChange(e) {
        let changedValues = {};
        changedValues[e.target.name] = e.target.value;
        const updatedItems = Object.assign(this.state.formItemsValues, changedValues);
       // console.log(updatedItems);
    }

    insertNewEntry() {
        let objectToInsert = {};
        const body = this.state.formItemsValues;
        //console.log("Body del POST:)
        //console.log(body);
        fetch('http://localhost:8080/api/' + this.props.targetTable, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                body
            )
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        })
        .catch((error) => {
            console.log("error de insert en el form container", error);
            alert('Error al conseguir datos del servidor');
        });
    }

    render() {
        this.state.formItems = this.state.tableColumns.map((column, index) => {
            return(
                <FormItem onChangeEvent={this.formItemsOnChange} key={index} title={column.name} type="text"/>
            );
        })

        return(
            <div className="FormContainer__MainContainer">
            <h1 className="FormContainer__Title">{this.state.title}</h1>
            <form className="FormContainer__Form">
                {this.state.formItems}
                <input onClick={this.insertNewEntry} className="FormContainer__ActionButton" type="button" value={this.state.actionButtonText} />
            </form>
        </div>
        );
    }
}

export default FormContainer;
