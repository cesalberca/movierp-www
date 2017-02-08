import React from 'react';

import './FormItem.css'

const FormItem = ({label, inputName, inputType, onChangeEvent}) => {
    return (
        <div className="FormItem">
            <label htmlFor={inputName} className="FormItem__label">{label}</label>
            <input name={inputName} className="FormItem__input" type={inputType} onChange={onChangeEvent}></input>
        </div>
    )
}

export default FormItem;
