import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'; 

const FieldControl = ({name, type, label, placeholder, className, meta, ...props, ...input}) => {
    return (
      <div className={meta.touched && meta.error ? 'has-error' : ''}>
      <ControlLabel>{label}</ControlLabel>
        <FormControl
          name={name}
          type={type}
          placeholder={placeholder}
          className={className}
          {...input}
          {...props}
        />
        {meta.touched && meta.error && <HelpBlock>{meta.error}</HelpBlock>}
      </div>
    );
}

export default FieldControl;