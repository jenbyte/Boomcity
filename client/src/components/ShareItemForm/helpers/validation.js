import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function validate(values, selectedTags) {
  const errors = {};

  if (!values.title || values.title === '') {
    errors.title = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Please enter name
      </Typography>
    );
  }
  if (!values.description || values.description === '') {
    errors.description = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        Please describe item
      </Typography>
    );
  }
  if (!selectedTags || selectedTags.length === 0) {
    errors.selectedTags = (
      <Typography style={{ color: '#d03030', fontsize: '10px' }}>
        At least one tag must be selected
      </Typography>
    );
  }

  return errors;
}
