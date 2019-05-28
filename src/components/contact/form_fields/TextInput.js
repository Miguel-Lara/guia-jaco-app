import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = props => {
  return (
    <div className="Row">
      <TextField
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        margin="normal"
        fullWidth
      />
    </div>
  );
};

export default TextInput;
