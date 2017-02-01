import React from 'react';

import FormItem from './FormItem';
import './../stylesheets/formContainer.css'

class FormContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: props.title,
            formItems: [],
            actionButtonText: props.actionButtonText,
            tableColumns: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/profile/employees', {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json.alps.descriptors[0].descriptors)
            const tableColumns = json.alps.descriptors[0].descriptors;
            this.setState({tableColumns})
        })
        .catch((error) => {
            alert('Error al conseguir datos del servidor');
        });

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
                <input className="FormContainer__ActionButton" type="submit" value={this.state.actionButtonText} />
            </form>
        </div>
        );
    }
}

export default FormContainer;
