import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('tags:', this.props);
  }

  onSubmit(o) {
    console.log('Submitting:', o);
  }

  validate(o) {
    console.log('Validating:', o);
    const error = {};
    if (!o.name) {
      error.name = 'Name is required';
    }
    if (!o.description) {
      error.description = 'description is required';
    } else if (!/.*@.*\..*/.test(o.description)) {
      error.description = 'description invalid';
    }
    return error;
  }

  render() {
    return (
      <div className="App">
        <Typography>
          <h1>Share. Borrow. Grow.</h1>
        </Typography>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Button>select an image</Button>
              <Field
                name="name"
                render={({ input, meta }) => (
                  <div className="field">
                    <TextField inputProps={input} label="Name your item" />

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
                  <div className="field">
                    <TextField inputProps={input} label="Describe your item" />
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
                name="tags"
                render={({ input, meta }) => (
                  <TextField inputProps={input} label="Add your tags" />

                  //   <Select
                  //   // open={open}
                  //   // onClose={handleClose}
                  //   // onOpen={handleOpen}
                  //   // value={tag}
                  //   // onChange={handleChange}
                  //   // inputProps={{
                  //   //   name: 'tag',
                  //   //   id: ''
                  //   // }}
                  //   >
                  //     {this.props.tags.map(tag => (
                  //       <MenuItem key={tag.value} value={tag.value}>
                  //         {tag.label}
                  //       </MenuItem>
                  //     ))}
                  //   </Select>
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
