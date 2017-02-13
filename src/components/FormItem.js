import React from 'react';

const FormItem = ({label, inputName, inputType, onChangeEvent}) => {
  return(
    <div className="FormItem">
      <label htmlFor={inputName} className="FormItem__label">{label}</label>
      <input name={inputName} className="FormItem__input" type={inputType} onChange={onChangeEvent}></input>
    </div>
  );
}

export default FormItem;
