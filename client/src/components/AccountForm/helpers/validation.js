import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Required
      </Typography>
    );
  }
  if (!values.password) {
    errors.password = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Required
      </Typography>
    );
  }
  if (values.fullname && !values.fullname) {
    errors.password = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Required
      </Typography>
    );
  }
  return errors;
}
