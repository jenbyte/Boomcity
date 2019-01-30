import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function validate(values, selectedTags, fileSelected) {
  const errors = {};
  console.log(selectedTags);
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
    // } else if (!fileSelected || values.fileSelected === false) {
    //   errors.fileSelected = 'Image is missing';
  } else if (selectedTags === []) {
    errors.tags = (
      <Typography style={{ color: 'red', fontsize: '10px' }}>
        At least one tag must be selected
      </Typography>
    );
  }

  return errors;
}
