import React, { Component, Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import {
  FormControl,
  TextField,
  Typography,
  MenuItem,
  Button,
  Checkbox,
  InputLabel,
  ListItemText,
  Select
} from '@material-ui/core';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    console.log('tags:', this.props);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, tags } = this.props;
    console.log('Tags:', this.props.tags);
    return (
      <div className={classes.container}>
        <Typography>
          <h1>Share. Borrow. Grow.</h1>
        </Typography>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Button className={classes.imageButton}>select an image</Button>
              <Field
                name="name"
                render={({ input, meta }) => (
                  <div>
                    <TextField
                      className={classes.textField}
                      id="filled-name"
                      inputProps={input}
                      label="Name your item"
                      id="margin-none"
                      // onChange={handleChange('name')}
                      // value={values.name}
                    />

                    {meta.touched &&
                      meta.invalid && (
                        <div
                          className="error"
                          style={{ color: 'red', fontsize: '10px' }}
                        >
                          {meta.error}
                        </div>
                      )}
                  </div>
                )}
              />
              <Field
                name="description"
                render={({ input, meta }) => (
                  <div>
                    <TextField
                      className={classes.textField}
                      id="filled-description"
                      inputProps={input}
                      label="Describe your item"
                      rows="4"
                    />
                    {meta.touched &&
                      meta.invalid && (
                        <div
                          className="error"
                          style={{ color: 'red', fontsize: '10px' }}
                        >
                          {meta.error}
                        </div>
                      )}
                  </div>
                )}
              />
              {console.log({ tags })}
              <Field
                name="tags"
                render={({ input, meta }) => (
                  <FormControl>
                    <InputLabel htmlFor="select-multiple-checkbox">
                      Add some tags
                    </InputLabel>
                    <Select
                      multiple
                      // open={open}
                      // onClose={handleClose}
                      // onOpen={handleOpen}
                      // value={tag}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'tag',
                        id: 'tag'
                      }}
                      value={this.state.checked}
                    >
                      {tags.map(tag => (
                        <MenuItem key={tag.id} value={tag.title}>
                          <Checkbox />
                          <ListItemText>{tag.title}</ListItemText>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
              <Button type="submit">Share</Button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default ShareItemForm;
