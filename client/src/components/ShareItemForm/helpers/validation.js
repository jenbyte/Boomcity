import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function validate(values, selectedTags, fileSelected) {
  const errors = {};

  if (!values.title || values.title === '') {
    errors.title = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Please enter name
      </Typography>
    );
  }
  if (!values.description || values.description === '') {
    errors.description = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Please describe item
      </Typography>
    );
  }
  if (!fileSelected || fileSelected === false) {
    errors.fileSelected = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        Image is missing
      </Typography> // look at final-form docs to see how to display error
    );
  }
  if (!selectedTags || selectedTags.length === 0) {
    errors.selectedTags = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        At least one tag must be selected
      </Typography>
    );
  }

  return errors;
}
