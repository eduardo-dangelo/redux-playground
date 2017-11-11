import React from 'react';
import { FormControl, Radio, HelpBlock } from 'react-bootstrap';

const FieldControl = ({
    name,
    type,
    placeholder,
    value,
    displayName,
    className,
    input,
    meta: { touched, error, warning },
    ...props,
    ...custom
  }) => {

  let component = null;

  switch(type) {
    case 'radio': 
      component = (
        <Radio name={name} value={value} {...input} {...props} >
          {displayName}
        </Radio>
      );
      break;

    default:
      component = (
        <FormControl
          name={name}
          type={type}
          placeholder={placeholder}
          className={className}
          {...input}
          {...props}
        /> 
      );
      break;
  }

  return (
    <div className={touched && error ? 'has-error' : ''}>
      {component}
      {touched && ((error && <HelpBlock>{error}</HelpBlock>) || (warning && <HelpBlock>{warning}</HelpBlock>))}
    </div>
  );
}

export default FieldControl;