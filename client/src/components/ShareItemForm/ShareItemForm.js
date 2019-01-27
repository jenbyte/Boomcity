import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { Form, Field } from 'react-final-form';

class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Email Form</h1>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                render={({ input, meta }) => (
                  <div className="field">
                    <label for="name">Name</label>
                    <TextField inputProps={input} />

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
                name="email"
                render={({ input, meta }) => (
                  <div className="field">
                    <label for="email">Email</label>
                    <TextField inputProps={input} />
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
            </form>
          )}
        />
      </div>
    );
  }
}

export default ShareItemForm;
