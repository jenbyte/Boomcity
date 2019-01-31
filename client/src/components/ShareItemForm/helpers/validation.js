import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function validate(values, selectedTags, fileSelected) {
  const errors = {};
  console.log('validation:', selectedTags);
  if (!values.title || values.title === '') {
    errors.title = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Please enter name
      </Typography>
    );
  } else if (!values.description || values.description === '') {
    errors.description = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Please describe item
      </Typography>
    );
  } else if (!fileSelected || fileSelected === false) {
    errors.fileSelected = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Image is missing
      </Typography>
    );
  } else if (!selectedTags || selectedTags === false) {
    errors.selectedTags = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        At least one tag must be selected
      </Typography>
    );
  }

  return errors;
}
