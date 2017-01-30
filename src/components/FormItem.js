import React from 'react';

const FormItem = ({title, inputType, inputValue, inputPlaceHolder, inputOnChange}) => {
    return (
        <div>
            <h1>{title}</h1>
            <input type={inputType} placeholder={inputPlaceHolder} onChange={inputOnChange}></input>
        </div>
    )
}

export default FormItem;