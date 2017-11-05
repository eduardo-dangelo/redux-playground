import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'; 

const FieldControl = ({id, name, type, label, placeholder, className, meta, input, ...props, ...custom}) => {
  let component = null;

  switch(type) {
  case 'radio':
    return {
      component = (
        <FormControl
          name={name}
          type={type}
          placeholder={placeholder}
          className={className}
          {...input}
          {...props}
        /> 
      )
    };
  case 'checkbox':
    return {
      component = (
        <FormControl
          name={name}
          type={type}
          placeholder={placeholder}
          className={className}
          {...input}
          {...props}
        /> 
      )
    };
  default:
    return {
      component = (
        <FormControl
          name={name}
          type={type}
          placeholder={placeholder}
          className={className}
          {...input}
          {...props}
        /> 
      )
    };
  }
  
  return (
    <div className={meta.touched && meta.error ? 'has-error' : ''}>
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        {component}
        {meta.touched && meta.error && <HelpBlock>{meta.error}</HelpBlock>}
      </FormGroup>
    </div>
  );
}

export default FieldControl;