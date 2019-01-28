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
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, tags } = this.props;
    console.log('Tags:', this.props.tags);
    return (
      <Fragment className={classes.container}>
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
                  <div className="field">
                    <TextField
                      multiline
                      className={classes.textField}
                      id="standard-textarea"
                      label="Name your item"
                      margin="normal"
                      placeholder=""
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
                      placeholder="Describe your item"
                      multiline
                      rows="4"
                    />
                  </div>
                )}
              />

              <Field
                name="tags"
                render={({ input, meta }) => (
                  <FormControl
                    // fullWidth
                    className={classes.fromControl}
                    width="500"
                  >
                    <InputLabel
                      className={classes.dropDown}
                      htmlFor="select-multiple-checkbox"
                    >
                      Add some tags
                    </InputLabel>
                    <Select
                      className={classes.menu}
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
            </form>
          )}
        />
        <Button type="submit">Share</Button>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ShareItemForm);
