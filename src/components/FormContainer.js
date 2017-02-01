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
        const generatedInputs = this.props.myInputs.map(myInput, index) => {
            <FormItem key={index} 
        })

        return(
            <div>
            <h1>{this.state.title}</h1>
            <form>
                {generatedInputs}
                <input type="submit" value={this.state.actionButtonText} />
            </form>
        </div>
        );
    }
}

export default FormContainer;
