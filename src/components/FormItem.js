import React from 'react';

import './FormItem.css'

class FormItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FormItem">
                <label htmlFor={this.props.title} className="FormItem__label">{this.props.title}</label>
                <input name={this.props.title} className="FormItem__input" type={this.props.inputType} onChange={this.props.onChangeEvent}></input>
            </div>
        )
    }
}

export default FormItem;
