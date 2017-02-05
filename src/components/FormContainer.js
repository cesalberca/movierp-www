import React from 'react';

import FormItem from './FormItem';
import './../stylesheets/formContainer.css'

class FormContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: this.props.title,
            formItems: [],
            actionButtonText: this.props.actionButtonText,
            tableColumns: []
        };

        this.insertNewEntry = this.insertNewEntry.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/profile/' + this.props.targetTable, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log('Columnas devueltas');
            console.log(json.alps.descriptors[0].descriptors);
            const tableColumns = json.alps.descriptors[0].descriptors;
            this.setState({tableColumns})
        })
        .catch((error) => {
            // console.log("error de form container", error);
            // alert('Error al conseguir datos del servidor');
        });

    }

    insertNewEntry() {
    }

    render() {
        const tableColumnsList = this.state.tableColumns.map((column, index) => {
            return(
                <FormItem key={index} title={column.name} />
            );
        })

        return(
            <div className="FormContainer__MainContainer">
            <h1 className="FormContainer__Title">{this.state.title}</h1>
            <form className="FormContainer__Form">
                {tableColumnsList}
                <input onClick={this.insertNewEntry} className="FormContainer__ActionButton" type="submit" value={this.state.actionButtonText} />
            </form>
        </div>
        );
    }
}

export default FormContainer;
