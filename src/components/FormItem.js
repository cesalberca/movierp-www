import React from 'react';

import './../stylesheets/formItem.css'

class FormItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FormItem__MainContainer">
                <h1 className="FormItem__Title">{this.props.title}</h1>
                <input name={this.props.title} className="FormItem__Input" type={this.props.inputType} placeholder={this.props.inputPlaceHolder} onChange={this.props.onChangeEvent}></input>
            </div>
        )
    }
}

export default FormItem;
