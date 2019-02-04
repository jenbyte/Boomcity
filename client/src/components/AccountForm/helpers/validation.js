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
  } else if (
    !values.email.match(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    )
  ) {
    errors.email = 'Please enter a valid e-mail adress';
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
