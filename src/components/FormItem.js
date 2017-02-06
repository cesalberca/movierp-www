import React from 'react';

import './FormItem.css'

const FormItem = ({title, inputType, inputValue, inputPlaceHolder, inputOnChange}) => {
    return (
        <div className="FormItem">
            <label htmlFor={title} className="FormItem__label">{title}</label>
            <input name={title} className="FormItem__input" type={inputType} placeholder={inputPlaceHolder} onChange={inputOnChange}></input>
        </div>
    )
}

export default FormItem;
