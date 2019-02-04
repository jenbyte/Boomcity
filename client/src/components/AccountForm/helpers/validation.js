import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function validate(values) {
  const errors = {};

  if (
    !values.email ||
    values.email === '' ||
    /.*@.*\..*/.test(values.email) === false
  ) {
    errors.email = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Please enter a valid email
      </Typography>
    );
  }
  if (!values.password) {
    errors.password = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Required
      </Typography>
    );
  }
  if (values.fullname === '') {
    errors.fullname = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Username required
      </Typography>
    );
  }
  return errors;
}
