import React from 'react';

import './../stylesheets/formItem.css'

const FormItem = ({title, inputType, inputValue, inputPlaceHolder, inputOnChange}) => {
    return (
        <div className="FormItem__MainContainer">
            <h1 className="FormItem__Title">{title}</h1>
            <input className="FormItem__Input" type={inputType} placeholder={inputPlaceHolder} onChange={inputOnChange}></input>
        </div>
    )
}

export default FormItem;