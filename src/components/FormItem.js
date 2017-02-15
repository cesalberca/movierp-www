import React from 'react';

const FormItem = ({label, value, inputName, inputType, onChangeEvent}) => {
  return(
    <div className="FormItem">
      <label htmlFor={inputName} className="FormItem__label">{label}</label>
      <input name={inputName} value={value} className="FormItem__input" type={inputType} onChange={onChangeEvent}/>
    </div>
  );
}

export default FormItem;
