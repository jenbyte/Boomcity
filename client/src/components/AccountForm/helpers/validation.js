import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function validate(values) {
  const errors = {};

  if (!values.email || values.email === '') {
    errors.email = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Required Field
      </Typography>
    );
  } else if (/.*@.*\..*/.test(values.email) === false) {
    errors.email = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Email address is invalid
      </Typography>
    );
  }

  if (!values.password) {
    errors.password = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Required field
      </Typography>
    );
  }

  if (values.fullname === '') {
    errors.fullname = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Required field
      </Typography>
    );
  }
  console.log(errors);
  return errors;
}
