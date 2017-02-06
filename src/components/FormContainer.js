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
            formItemsValues: [],
            actionButtonText: this.props.actionButtonText
        };

        this.loadFormItems = this.loadFormItems.bind(this);
        this.insertNewEntry = this.insertNewEntry.bind(this);
        
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
            console.log("Columnas de tabla cargadas:");
            console.log(json.alps.descriptors[0].descriptors);
            const tableColumns = json.alps.descriptors[0].descriptors;
            this.setState({tableColumns})

            console.log("FormItems cargados:")
            console.log(this.state.formItems);
        })
        .catch((error) => {
            // console.log("error de form container", error);
            // alert('Error al conseguir datos del servidor');
        });
    }

    formItemsOnChange(e) {
      //this.setState({value: e.target.value}); // algo como inputvalues[e.name]
      //this.setState(formItemsValues.e.target.name: e.target.value);
    }

    insertNewEntry() {
        /*fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })*/

        console.log("intento de insert")
        let objectToInsert = {};
        const body = this.state.tableColumns.map((column, index) => { 
            return objectToInsert[column] = this.state.formItems[index].state.value;
        })

        //console.log(body);

        fetch('http://localhost:8080/api/' + this.props.targetTable, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                //aqui habrá que añadir cosas!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
            // alert('Error al conseguir datos del servidor');
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
