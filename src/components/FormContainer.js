import React from 'react';

import FormItem from './FormItem';

class FormContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            formItems: [],
            actionButtonText: ''
        };
    }

    render() {
        fetch('http://localhost:8080/api/profile/cinemas', {
            method: 'GET'
        })
            .then((response) => {
            return response.json();
        })
            .then((json) => {
            console.log(json.descriptors)
        })
            .catch((error) => {
            alert('Error al conseguir datos del servidor');
        });
        return(
            <div>
            <h1>{this.state.title}</h1>
            <form>
                <input type="submit" value={this.state.actionButtonText} />
            </form>
        </div>
        );
    }
}

export default FormContainer;
